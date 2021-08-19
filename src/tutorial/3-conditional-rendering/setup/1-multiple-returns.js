import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [User, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setLoading(false);
          setError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (Loading) {
    return (
      <div>
        <h1>laoding...</h1>;
      </div>
    );
  }
  if (Error) {
    return (
      <div>
        <h1>there is an error</h1>;
      </div>
    );
  }
  return (
    <div>
      <h1>{User}</h1>
    </div>
  );
};

export default MultipleReturns;
