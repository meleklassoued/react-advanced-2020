import React from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "peter",
    age: 32,
    message: "random message",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "hello world" });
  };
  /* ------------------------------- set message ------------------------------ */
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change messge
      </button>
    </>
  );
};

export default UseStateObject;
