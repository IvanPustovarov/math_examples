import React, { useState, useEffect } from "react";
import Example from "./Example";
import createExample from "../api";
import ResultMessage from "./ResultMessage";
import Form from "./Form";
import "../styles/exampleTable.css";

const ExampleTable = () => {
  const EXAMPLES_COUNT = 10;

  const [examples, setExamples] = useState([]);
  const [results, setResults] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");

  const renderResultMessage = () => {
    if (isSubmitted) {
      return (
        <ResultMessage result={correctCount} all={EXAMPLES_COUNT} name={name}/>
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateResults();
    setIsSubmitted(true);
  };

  const calculateResults = () => {
    let correctCount = 0;
    examples.forEach((example, i) => {
      const isCorrect = example.result === parseInt(results[i].answer, 10);
      results[i].isCorrect = isCorrect;
      if (isCorrect) {
        correctCount += 1;
      }
    });
    setResults(results);
    setCorrectCount(correctCount);
  };

  const handleAnswerChange = (value, index) => {
    results[index].answer = value;
    setResults(results);
  };

  const handleNameChange = (name) => {
    setName(name);
  };

  useEffect(() => {
    const examples = [];
    const results = [];

    for (let index = 0; index < EXAMPLES_COUNT; index++) {
      examples.push(createExample());
      results.push({
        answer: "",
        isCorrect: false,
      });
    }
    setExamples(examples);
    setResults(results);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Form handleNameChange={handleNameChange} isSubmitted={isSubmitted}/>
        {examples.map((elem, index) => (
          <Example
            example={elem}
            key={index}
            index={index}
            isCorrect={results[index].isCorrect}
            isSubmitted={isSubmitted}
            handleAnswerChange={handleAnswerChange}
          />
        ))}
        <button type="submit" className="example_table_button" onSubmit={() => handleSubmit}>
          Send result
        </button>
        {renderResultMessage()}
      </form>
    </div>
  );
};

export default ExampleTable;
