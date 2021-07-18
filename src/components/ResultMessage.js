import React from "react";
import "../styles/resultMessage.css";

const ResultMessage = ({ result, all, name }) => {
  const showResult = () => {
    return <div className="result_text">{name ? name : `User`}, your result: {result}/{all}. {result >= 5 ? "Good job!" : "Nice, but you can do it better"}</div>;
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
