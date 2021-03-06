import React from "react";
import "../styles/example.css";

const Example = ({example, index, answer, handleAnswerChange, isCorrect, isSubmitted}) => {

  const handleChange = (event) => {
    const number = event.target.value;
    handleAnswerChange(number, index);
  };

  const getClassName = () => {
    if (isSubmitted) {
      return isCorrect ? 'true_result' : 'false_result'
    }
    return 'example_input'
  }

  const formattedExample = () => {
    return <div className="example_arguments">{example.first} {example.operator} {example.second} = </div>
  }

  return (
    <div className="example">
      {formattedExample()}
      <input
        className={getClassName()}
        type="number"
        value={answer}
        onChange={handleChange}
        readOnly={isSubmitted}
        required="required"
      />
    </div>
  );
};

export default Example;
