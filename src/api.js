
import {evaluate} from "mathjs";

const NUMBER = 100;

const getRandomInt = () => {
  return Math.floor(Math.random() * NUMBER + 1);
};

const createArguments = () => {
    let operators = ["+", "-", "*", "/"];
    let numberOperator = Math.floor(Math.random() * operators.length);
    let operator = operators[numberOperator];
    let first = getRandomInt();
    let second = getRandomInt();
    let result = evaluate(`${first}${operator}${second}`);
    if(operator === "/") {
        result = result.toFixed(2);
    }

    const example= {
        first,
        second,
        operator,
        result
    }
  return example;
};

export default createArguments;
