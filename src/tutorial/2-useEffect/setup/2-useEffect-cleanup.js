import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, Setsize] = useState(window.innerWidth);
  console.log(size);
  const checkSize = () => {
    Setsize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
