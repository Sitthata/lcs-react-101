import { useState } from "react";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

export default function Rainbow() {
  const [color, setColor] = useState(colors[0]);

  const handleClick = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColor]);
  };
  
  return (
    <div
      style={{ backgroundColor: color }}
      className="p-5 transition-all duration-100"
    >
      <h1 className="text-white text-2xl font-bold">Rainbow</h1>
      <button className="bg-white text-black p-2 rounded-md" onClick={handleClick}>CLICK ME!</button>
    </div>
  );
}
