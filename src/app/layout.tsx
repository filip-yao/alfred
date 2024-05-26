import "./globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "Alfréd",
  description: "Alfréd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toaster richColors />
    </html>
  );
}
