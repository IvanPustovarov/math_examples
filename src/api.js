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

  let first = 0;
  let second = 0;
  let third = 0;
  let fourth = 0;
  let result = 0;

  switch (numberOfTemplate) {
    case 1:
      let firstOperator = getRandomOperator(2);
      let secondOperator = getRandomOperator(4);
      let thirdOperator = getRandomOperator(4);

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
      const example = {
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
      break;
    case 3:
      break;
    case 4:
      break;

    default:
      break;
  }
};

export { createMediumExample };
export default createExample;
