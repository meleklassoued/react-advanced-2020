import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// import { data } from "../../../data";
// reducer function
//!the Reducer function:
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModelOpen: true,
      model: "added Item",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, showModel: true, model: "please enter value" };
  }
  if (action.type === "CLOSE_MODEL") {
    return { ...state, isModelOpen: false };
  }
  if (action.type === "REMOVE") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload,
    );
    return { ...state, people: newPeople };
  }
};

/* ---------------------------- Our Default State --------------------------- */
const defaultState = {
  people: [],
  isModelOpen: true,
  model: "hello world",
};
/* ------------------------ finish our default state ------------------------ */

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModel = () => {
    dispatch({ type: "CLOSE_MODEL" });
  };
  return (
    <>
      {state.isModelOpen && (
        <Modal closeModel={closeModel} modalContent={state.model} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add!</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() => dispatch({ type: "REMOVE", payload: person.id })}>
              {" "}
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
