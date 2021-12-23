import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [Value, setValue] = useState(window.innerWidth);
  let checksize=() => {
      setValue(window.innerWidth)};

  useEffect(() => {
    window.addEventListener("resize", checksize);
    // return ()=>{
    //   window.removeEventListener("resize",checksize)
    // }
  },[]);

  return (
    <>
      <h1> size of window</h1>
      <h2>{Value}</h2>
    </>
  );
};

export default UseEffectCleanup;
