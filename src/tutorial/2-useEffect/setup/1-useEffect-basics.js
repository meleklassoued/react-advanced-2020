import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setvalue] = useState(0);
  useEffect(() => {
    console.log("callUse effect");
    if (value > 0) {
      document.title = `New message (${value})`;
    }
  }, [value]);

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setvalue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
