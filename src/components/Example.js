import React, { useState } from "react";

const Example = ({example, resultCount}) => {
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const number = event.target.value;
    setNumber(parseInt(number, 10));
    resultCount(number);
  };

  resultCount = (answer) => answer;

  return (
    <div>
      {example.first} {example.operator} {example.second} ={" "}
      <input
        type="number"
        value={number}
        onChange={handleChange}
        required="required"
      />
    </div>
  );
};

export default Example;
