import React, { useState } from "react";

const Example = ({example}) => {
  //const example = props.example;
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const number = event.target.value;
    setNumber(parseInt(number, 10));
  };

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
