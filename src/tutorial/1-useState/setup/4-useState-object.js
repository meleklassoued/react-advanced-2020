import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("malik");
  const [age, setage] = useState("malik");
  const [message, setMessage] = useState("random message");

  //  const { name, age, message } = person;

  const changeMessage = () => {
    if (message === "random message") {
      setMessage("aslema chabeb");
    } else {
      setMessage("random message");
    }
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type='button' className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
