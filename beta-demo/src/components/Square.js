import React, { useState } from "react";
import "../App.css";

export default function Square() {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    console.log("clicked");
    setValue("X");
    console.log(value);
  };
  return (
    <>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </>
  );
}
