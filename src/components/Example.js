import React, { useState } from "react";

const Example = (props) => {
  const example = props.example;
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const number = event.target.value;
    setNumber(parseInt(number, 10));
  };

  return (
    <>
      {example.first} {example.operator} {example.second} ={" "}
      <input
        type="number"
        value={number}
        onChange={handleChange}
        required="required"
      />
    </>
  );
};

export default Example;
