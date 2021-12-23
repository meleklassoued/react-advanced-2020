import React, { useState } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const ShowModelNred = () => {
  //state that we used for the logic .
  const [Name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModel, setShowModel] = useState(false);

  // handle submit is a function that work when the form is submitted .

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name) {
      setShowModel(true);
      setPeople([
        ...people,
        { id: new Date().getTime().toString(), name: Name },
      ]);
      setName("");
    } else {
      setShowModel(true);
    }
  };
  // and the return of the function
  return (
    <>
      {showModel && <Modal />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add a person</button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default ShowModelNred;
