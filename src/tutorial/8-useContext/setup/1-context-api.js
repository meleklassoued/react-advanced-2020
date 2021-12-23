import React, { useState, createContext, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = createContext();

const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>context API / useContext</h3>
      <List></List>
    </PersonContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);
  console.log();
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person}></SinglePerson>;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default ContextApi;

// let userDetailsContext = createContext(null);
// function SubChildComp() {
//   let contextData = useContext(userDetailsContext);
//   return (
//     <div>
//       <h3>this is the subchild componenet </h3>
//       <h4>this the name {contextData.name}</h4>
//       <h5>this the age {contextData.age} </h5>
//     </div>
//   );
// }
// function ChildCom() {
//   return (
//     <div>
//       <h2>this is the child component </h2>
//       <SubChildComp></SubChildComp>
//     </div>
//   );
// }
// export default function UserDetailsComponent() {
//   const [userDetails] = useState({
//     name: "maywak",
//     age: 30,
//   });
//   return (
//     <userDetailsContext.Provider value={userDetails}>
//       <h1>this is the parent component </h1>
//       <hr />
//       <ChildCom></ChildCom>
//     </userDetailsContext.Provider>
//   );
// }
// function SubChildComp() {
//   let contextData = useContext(userDetailsContext);
//   return (
//     <div>
//       <h3>this is the subchild componenet </h3>
//       <h4>this the name {contextData.name}</h4>
//       <h5>this the age {contextData.age} </h5>
//     </div>
//   );
// }
// function ChildCom() {
//   return (
//     <div>
//       <h2>this is the child component </h2>
//       <SubChildComp></SubChildComp>
//     </div>
//   );
// }
// export default function UserDetailsComponent() {
//   const [userDetails] = useState({
//     name: "maywak",
//     age: 30,
//   });
//   return (
//     <userDetailsContext.Provider value={userDetails}>
//       <h1>this is the parent component </h1>
//       <hr />
//       <ChildCom></ChildCom>
//     </userDetailsContext.Provider>
//   );
// }

// function SubChildComp({ userDetails }) {
//   return (
//     <div>
//       <h3>this is the subchild componenet</h3>
//       <h4>this the name :{userDetails.name}</h4>
//       <h5>this the age :{userDetails.age}</h5>
//     </div>
//   );
// }

// function ChildCom({ userDetails }) {
//   return (
//     <div>
//       <h2>this is the child component </h2>
//       <SubChildComp userDetails={userDetails}></SubChildComp>
//     </div>
//   );
// }

// function UserDeatailsComp() {
//   const [userDeatails, setUserDetails] = useState({
//     name: "maynak",
//     age: 30,
//   });
//   return (
//     <div>
//       <h1>this is the parent Component</h1>
//       <ChildCom userDetails={userDeatails} />
//     </div>
//   );
// }

// export default UserDeatailsComp;
