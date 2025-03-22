import { useState } from "react";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

export default function Rainbow() {
  return (
    <div
      className="p-5 transition-all duration-100"
      style={{ backgroundColor: colors[0] }}
    >
      <h1 className="text-white text-2xl font-bold">Rainbow</h1>
      <button
        className="bg-white text-black p-2 rounded-md"
      >
        CLICK ME!
      </button>
    </div>
  );
}
