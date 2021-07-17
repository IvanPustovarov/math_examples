import React from "react";
import "../styles/resultMessage.css";

const ResultMessage = ({ result, all, name }) => {
  const showResult = () => {
    return `${
      name ? name : `Пользователь`
    }, твой результат: ${result}/${all}. Молодец!`;
  };
  const refreshPage = () => {
    window.location.reload(false);
  }
  return <div className="result">{showResult()} <button onClick={refreshPage} className="result_button">Попробовать снова</button></div>;
};

export default ResultMessage;
