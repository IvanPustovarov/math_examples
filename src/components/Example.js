import React, {useState} from "react";

const Example = (props) => {
  const example = props.example;
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const num = event.target.value;
    setNumber(num);
  }

  return (
    <>
      {example.first} {example.operator} {example.second} = <input type="number" value={number} onChange={handleChange}/>
    </>
  );
};

export default Example;
