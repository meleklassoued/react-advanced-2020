import React from "react";

function Actionlink() {
  const Numbers = [1, 2, 3];
  const NewNumbers = Numbers.filter((N) => N !== 1);
  return (
    <>
      <ul>
        {Numbers.map((N) => (
          <li>{N}</li>
        ))}
      </ul>
      <ul>
        {NewNumbers.map((N) => (
          <li>{N}</li>
        ))}
      </ul>
    </>
  );
}

export default Actionlink;
