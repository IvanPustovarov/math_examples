import React, { useState } from "react";

const Example = (props) => {
  const example = props.example;
  const resultCount = props.resultCount;
  const [number, setNumber] = useState("");
  const [resultState, setResultState] = useState(false);

  const handleChange = (event) => {
    const num = event.target.value;
    setNumber(parseInt(num, 10));
    resultCount(number);
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
