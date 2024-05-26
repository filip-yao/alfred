"use client";

import React, { useState } from "react";
import { items } from "../../../items";

function CoffeeMenu() {
  const [counts, setCounts] = useState(Array(items.length).fill(0));
  const [ucebna, setUcebna] = useState(items[0]);
  const [poznamka, setPoznamka] = useState("");

  const incrementValue = (index: number) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const decrementValue = (index: number) => {
    if (counts[index] > 0) {
      const newCounts = [...counts];
      newCounts[index]--;
      setCounts(newCounts);
    }
  };

  const submitOrder = async () => {
    fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({ counts, ucebna, poznamka }),
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center w-full">
        <div className="flex font-semibold">
          <h2 className="text-lg">Vyberte učebnu</h2>
        </div>
        <select
          name="Zvolte učebnu "
          className="bg-green-400 border border-green-500 rounded-md px-2 py-1"
          id="ucebna"
          onChange={(e) => setUcebna(e.target.value)}
          value={ucebna}
        >
          <option value="B405">B405</option>
          <option value="B406">B406</option>
          <option value="B407">B407</option>
          <option value="B408">B408</option>
          <option value="B409">B409</option>
          <option value="B411">B411</option>
          <option value="B417">B417</option>
          <option value="B418">B418</option>
          <option value="B419">B419</option>
          <option value="B421">B421</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-lg">Vyberte svůj požadavek</h2>

        <div>
          <div className="flex flex-col gap-2">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>{item}</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrementValue(index)}
                    className="flex justify-center items-center text-black bg-neutral-200 border border-neutral-300 rounded-full w-8 h-8"
                  >
                    <div>-</div>
                  </button>
                  <div className="flex justify-center items-center w-8 h-8 text-center rounded-full bg-green-400 border border-green-500">
                    <div>{counts[index]}</div>
                  </div>
                  <button
                    onClick={() => incrementValue(index)}
                    className="flex justify-center items-center text-black bg-neutral-200 border border-neutral-300 rounded-full w-8 h-8"
                  >
                    <div>+</div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-lg">Poznámky</h2>

        <div className="flex ">
          <textarea
            className="bg-neutral-200 w-full rounded-xl border border-neutral-300 px-4 py-2 h-20 resize-none"
            placeholder="Sem napište poznámku..."
            onChange={(e) => setPoznamka(e.target.value)}
            value={poznamka}
          ></textarea>
        </div>
      </div>

      <div className="flex w-full">
        <button
          onClick={submitOrder}
          className="flex bg-green-400 h-12 rounded-2xl flex-row justify-center items-center w-full border border-green-500"
        >
          <p className="font-bold">ODESLAT OBSLUZE</p>
        </button>
      </div>
    </div>
  );
}

export default CoffeeMenu;
