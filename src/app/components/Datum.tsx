"use client";
import React, { useState, useEffect } from "react";

function DateTimeComponent() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <p className="font-semibold">{currentDateTime.toLocaleString()}</p>
    </div>
  );
}

export default DateTimeComponent;
