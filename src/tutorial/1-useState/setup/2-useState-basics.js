import React, { useState } from "react";

function UseStateBsics() {
  const [text, setText] = useState("random Title");
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return(
    <>
 <h1>{text}</h1>
  <button type="button" className="btn" onClick={handleClick}>
    change tile
  </button>
  </>
  );
};

export default UseStateBsics;
