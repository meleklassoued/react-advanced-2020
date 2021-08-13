import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `New Messages ${value}`;
      console.log("beslema");
    }
  },[value]);

  useEffect(() => {
    if(value>5){
    console.log('hello')
    document.title=`omek 9a7ba`}
  },[value]);
  return (
    <>
      <h2>useEffect Basics</h2>;<h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
