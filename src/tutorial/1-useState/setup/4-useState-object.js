import React from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "peter",
    age: 32,
    message: "random message",
  });
  const changeMessage = () => {
    if (person.message === "random message") {
      setPerson({ ...person, message: "omek el KA7ba ennikha ena " });
    } else {
      setPerson({ ...person, message: "random message" });
    }
  };
  /* ------------------------------- set message ------------------------------ */
  return (
    <>
      <h3>{person.name}</h3>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button onClick={changeMessage}>enzel Bro</button>
    </>
  );
};

export default UseStateObject;
