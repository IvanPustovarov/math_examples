import { evaluate } from "mathjs";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max + 1);
};

const getRandomOperator = (quantity) => {
  const operators = ["+", "-", "*", "/"];
  let operatorIndex = Math.floor(Math.random() * quantity);
  let operator = operators[operatorIndex];

  return operator;
};

const createExample = () => {
  let operator = getRandomOperator(4);

  let first = 0;
  let second = 0;

  if (operator === "+" || operator === "-") {
    first = getRandomInt(100);
    second = getRandomInt(100);
  } else if (operator === "/") {
    second = getRandomInt(10);
    first = getRandomInt(10) * second;
  } else if (operator === "*") {
    first = getRandomInt(10);
    second = getRandomInt(10);
  }

  let result = evaluate(`${first}${operator}${second}`);

  const example = {
    first,
    second,
    operator,
    result,
  };
  return example;
};

const createMediumExample = () => {
  const numberOfTemplate = getRandomInt(4);

  let first,
    second,
    third,
    fourth,
    result = 0;
  let firstOperator, secondOperator, thirdOperator;
  let example = {
    first,
    second,
    third,
    fourth,
    firstOperator,
    secondOperator,
    thirdOperator,
    result,
  };

  switch (numberOfTemplate) {
    case 1:
      firstOperator = getRandomOperator(2);
      secondOperator = getRandomOperator(4);
      thirdOperator = getRandomOperator(4);

      first = getRandomInt(100);
      second = getRandomInt(100);

      /* для случая, когда второй оператор (после скобок) равен плюс или минус */
      if (
        (secondOperator === "+" || secondOperator === "-") &&
        (thirdOperator === "+" || thirdOperator === "-")
      ) {
        third = getRandomInt(100);
        fourth = getRandomInt(100);
      }
      if (
        (secondOperator === "+" || secondOperator === "-") &&
        thirdOperator === "*"
      ) {
        third = getRandomInt(10);
        fourth = getRandomInt(10);
      }
      if (
        (secondOperator === "+" || secondOperator === "-") &&
        thirdOperator === "/"
      ) {
        fourth = getRandomInt(10);
        third = getRandomInt(10) * fourth;
      }

      /*  для случая, когда второй оператор (после скоб) будет умножить */
      if (
        (secondOperator === "*" || secondOperator === "/") &&
        thirdOperator === "*"
      ) {
        third = getRandomInt(10);
        fourth = getRandomInt(10);
      }

      if (
        (secondOperator === "*" || secondOperator === "/") &&
        (thirdOperator === "+" || thirdOperator === "-")
      ) {
        third = getRandomInt(10);
        fourth = getRandomInt(100);
      }

      if (secondOperator === "*" && thirdOperator === "/") {
        third = getRandomInt(10);
        fourth = getRandomInt(10);
      }

      /* для случая, когда второй оператор (после скоб) будет поделить */
      if (secondOperator === "/" && thirdOperator === "/") {
        fourth = getRandomInt(100);
        third = getRandomInt(10) * fourth;
      }

      result = evaluate(
        `(${first}${firstOperator}${second})${secondOperator}${third}${thirdOperator}${fourth}`
      );
      example = {
        first,
        second,
        third,
        fourth,
        firstOperator,
        secondOperator,
        thirdOperator,
        result,
      };

      return example;
    case 2:
      firstOperator = getRandomOperator(4);
      secondOperator = getRandomOperator(2);
      thirdOperator = getRandomOperator(2);

      second = getRandomInt(100);
      third = getRandomInt(100);
      fourth = getRandomInt(100);

      if (firstOperator === "+" || secondOperator === "-") {
        first = getRandomInt(100);
      }

      if (firstOperator === "*") {
        first = getRandomInt(10);
      }

      if (firstOperator === "/") {
        let secAndThird = evaluate(`${second}${secondOperator}${third}`);
        first = getRandomInt(10) * secAndThird;
      }

      result = evaluate(
        `${first}${firstOperator}(${second}${secondOperator}${third})${fourth}`
      );

      example = {
        first,
        second,
        third,
        fourth,
        firstOperator,
        secondOperator,
        thirdOperator,
        result,
      };

      return example;
    case 3:
      first = getRandomInt(100);
      second = getRandomInt(100);

      firstOperator = getRandomOperator(2);
      secondOperator = getRandomOperator(4);

      if(secondOperator === "+" || secondOperator === "-" ) {
        third = getRandomInt(100);
      }
      if(secondOperator === "*") {
        third = getRandomInt(10);
      }
      if(secondOperator === "/") {
        let firstAndSec = evaluate(`${first}${firstOperator}${second}`);
        third = getRandomInt(10) * firstAndSec;
      }
      result = evaluate(`(${first}${firstOperator}${second})${secondOperator}${third}`);
      example = {
        first,
        second,
        third,
        fourth,
        firstOperator,
        secondOperator,
        thirdOperator,
        result,
      };

      return example;
    case 4:
      firstOperator = getRandomOperator(4);
      secondOperator = getRandomOperator(2);
      thirdOperator = getRandomOperator(2);

      third = getRandomInt(100);
      fourth = getRandomInt(100);

      if(firstOperator === "+" || firstOperator === "-") {
        first = getRandomInt(100);
        second = getRandomInt(100);
      }

      if(firstOperator === "*") {
          first = getRandomInt(10);
          second = getRandomInt(100);
      }
      if(firstOperator === "/") {
        first = getRandomInt(10) * second;
        second = getRandomInt(10);
      }

      result = evaluate(`${first}${firstOperator}${second}${secondOperator}(${third}${thirdOperator}${fourth})`);
      example = {
        first,
        second,
        third,
        fourth,
        firstOperator,
        secondOperator,
        thirdOperator,
        result,
      };
      return example;

    default:
      break;
  }
};

export { createMediumExample };
export default createExample;
