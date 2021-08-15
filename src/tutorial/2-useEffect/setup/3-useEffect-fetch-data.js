import React from "react";
import { useEffect, useState } from "react";
const URL = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setusers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(URL);
    const users = await response.json();
    setusers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>
                  {login}
                  <a href={html_url}>profile</a>
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
