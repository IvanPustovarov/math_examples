import React, { useState, useEffect } from "react";
import Example from "./Example";

const ExampleTable = (props) => {
  const createExample = props.createExample;
  const [arrayExamples, setArrayExamples] = useState([]);

  const createExamples = () => {
    for (let index = 0; index < 10; index++) {
      setArrayExamples(arrayExamples => [...arrayExamples, createExample()]);
    }
  };

  const handleSubmit = (event) => {};

  const resultCount = (answer) => {};

  const getAnswerArray = () => {};

  useEffect(() => {
    createExamples();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {arrayExamples.map((elem, index) => (
          <Example example={elem} key={index}/>
        ))}
        {console.log(arrayExamples)}
        <button type="submit" onSubmit={() => handleSubmit}>
          Send result
        </button>
      </form>
    </div>
  );
};

export default ExampleTable;
