"use client";

import Link from "next/link";
import CoffeeMenu from "./components/CoffeeMenu";
import DateTimeComponent from "./components/Datum";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-indigo-400 to-cyan-400">
      <div>
        <div id="menu" className="flex  w-full justify-between p-4 bg-white">
          <div className="flex flex-row items-center">
            <img
              src="https://www.spst.cz/sites/default/files/SPST-logo-70let_horiz_1_0.png"
              className="h-14"
            ></img>
            <div className="flex justify-center items-center px-4">
              <p className="font-bold">Menu → </p>
            </div>
            <div className="flex justify-center items-center px-4">
              <Link
                className="underline underline-offset-4 font-bold"
                href="https://www.spst.cz/maturitni-zkousky"
              >
                Maturitní rozpis
              </Link>
            </div>
          </div>

          <div className="flex  justify-center items-center">
            <div className="flex justify-center items-center p-4">
              <iframe
                src="https://free.timeanddate.com/clock/i9e13w17/n204/tlcz12/fn14/fs16/tct/pct/ftb/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4"
                width="202"
                height="59"
              ></iframe>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/029/787/original/fedora-hat-black-and-white-clipart-transparent-background-free-png.png"
              className="h-14 mr-4"
            ></img>
            <div className="flex flex-col justify-center">
              <h1 className="text-black font-bold">
                Alfréd Alpha / Maturitní systém SPŠ TŘEBÍČ
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-screen ">
          <div
            id="form"
            className="bg-white flex flex-col p-8 w-[25rem] rounded-3xl"
          >
            <h2 className="text-center text-2xl font-bold w-full underline underline-offset-2 mb-12">
              Objednávací formulář
            </h2>

            <div id="dlazdice">
              <CoffeeMenu />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-xl fixed bottom-3 p-2 left-3">
          <p className="text-center">© Vytvořeno hrdými lyceisty z TLA 2</p>
          <p className="text-center">Filip Yao & Jan Dvořáček</p>
        </div>
      </div>
    </main>
  );
}
