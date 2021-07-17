import React from "react";
import "../styles/resultMessage.css";

const ResultMessage = ({ result, all, name }) => {
  const showResult = () => {
    return `${
      name ? name : `User`
    }, your result: ${result}/${all}. Good job!`;
  };
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="result">
      {showResult()}
      <button onClick={refreshPage} className="result_button">
      Try again
      </button>
    </div>
  );
};

export default ResultMessage;
