import React, { useState } from "react";

const Block = ({ text }) => {
  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  const [color, setColor] = useState([
    randomColor(),
    randomColor(),
    randomColor(),
  ]);

  let updateColor = () => {
    setColor([randomColor(), randomColor(), randomColor()]);
  };

  return (
    <div
      className="block"
      onClick={updateColor}
      style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default Block;
