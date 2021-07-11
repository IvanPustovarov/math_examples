import React, { useState, useEffect } from "react";
import "./App.css";
import Example from "./components/Example";
import ExampleTable from "./components/ExampleTable";

function App() {
  const NUMBER = 100;
  const equal = "=";
  const [firstArgument, setFirstArgument] = useState("");
  const [secondArgument, setSecondArgument] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");
  const [examples, setExamples] = useState({
    firstArgument,
    operator,
    secondArgument,
    equal,
    result,
  });

  const getRandomInt = () => {
    return Math.floor(Math.random() * NUMBER + 1);
  };

  const getRandomOperator = () => {
    let operators = ["+", "-", "*", "/"];
    let numberOperator = Math.floor(Math.random() * operators.length);
    let operator = operators[numberOperator];
    return operator;
  };

  const getResult = () => {
    
  };

  const createExample = () => {
    return <div>
    {firstArgument} {operator} {secondArgument} {equal} {result}
    </div>
  };

  useEffect(() => {
    setFirstArgument(getRandomInt());
    setSecondArgument(getRandomInt());
    setOperator(getRandomOperator());
    switch (operator) {
      case "+":
         setResult(firstArgument + secondArgument);
        break;
      case "-":
        setResult(firstArgument - secondArgument);
        break;
      case "*":
        setResult(firstArgument * secondArgument);
        break;
      case "/":
        setResult(firstArgument / secondArgument);
        break;

      default:
        break;
    }
  }, []);
  return (
    <div className="App">
      Math examples
      {createExample()}
    </div>
  );
}

export default App;
