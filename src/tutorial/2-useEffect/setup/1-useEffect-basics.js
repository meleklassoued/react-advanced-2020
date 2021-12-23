import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setvalue] = useState(0);
  const [value2, setvalue2] = useState(0);
  const [value3, setValue3] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setValue3(value3 + 1);
    }, 2000);
  }, []);
  useEffect(() => {
    if (value === 0) {
      document.title = ` le nombre ${value + 1} et ${value2 + 1}`;
    }
  });
  // document.title = `${value}`;

  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() => {
          setvalue(value + 1);
          setvalue2(value2 + 1);
        }}>
        click me
      </button>
      <button className='btn' onClick={() => console.log(value3)}>
        ENZEL TRAH
      </button>
      <h1>{value3}</h1>
    </>
  );
};
export default UseEffectBasics;
