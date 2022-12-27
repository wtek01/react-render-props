import React from "react";

const urlImage =
  "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350";

const Cat = (props) => {
  const { mousee } = props;
  return (
    <img
      alt="nice cat"
      src={urlImage}
      style={{
        position: "absolute",
        left: mousee.x,
        top: mousee.y,
        width: "20px",
        height: "20px",
      }}
    />
  );
};

export default Cat;
