import React, { useState, useEffect } from "react";
import Example from "./Example";
import ResultMessage from "./ResultMessage";

const ExampleTable = (props) => {
  const [example, setExample] = useState(props.array);
  const [result, setResult] = useState(false);
  const [arrayResult, setArrayResult] = useState([]);
  const [arrayCallback, setArrayCallback] = useState([]);
  const [userAnswer, setUserAnswer] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    getAnswerArray();
    let match = arrayResult.find(item => item.result === userAnswer);
    arrayCallback.push(match);
  };

  const resultCount = (answer) => {
    userAnswer.push(answer);
  };

  const getAnswerArray = () => {
   arrayResult.push(example.result)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {example.map((elem, index) => (
          <ul key={index}>
            <Example example={elem} resultCount={resultCount} />
          </ul>
        ))}
        <button type="submit" onSubmit={() => handleSubmit}>Send result</button>
      </form>
    </div>
  );
};

export default ExampleTable;
