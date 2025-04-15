import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { items } from "../../../../items";

interface Body {
  counts: number[];
  ucebna: string;
  poznamka: string;
}

export async function POST(req: Request, res: NextApiResponse) {
  const body: Body = await req.json();

  let emailBody = "";
  body.counts.forEach((count, index) => {
    if (count > 0) {
      emailBody += `<p>${items[index]}: ${count}</p><br>`;
    }
  });

  emailBody += `<p>Poznámka: ${body.poznamka}</p>`;

  const transporter = nodemailer.createTransport({
    host: "smtp.seznam.cz",
    port: 465,
    secure: true,
    auth: {
      user: "alfred.spst",
      pass: "alfred.spst12341234",
    },
  });

  const info = await transporter.sendMail({
    from: "alfred.spst@seznam.cz",
    to: "yaof.06@spst.eu",
    subject: "Učebna: " + body.ucebna,
    html: emailBody,
  });

  return NextResponse.json(info);
}
