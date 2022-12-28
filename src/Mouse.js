import React, { useState } from "react";

// The <Mouse> component encapsulates the behavior we need...
const Mouse = (props) => {
  //state = { x: 0, y: 0 };
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  console.log("Mouse props : ", props);
  const handleMouseMove = (e) => {
    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div
      className={props.className}
      style={{ height: "100vh" }}
      onMouseMove={handleMouseMove}
    >
      {props.render(coordinates)}
    </div>
  );
};

export default Mouse;
