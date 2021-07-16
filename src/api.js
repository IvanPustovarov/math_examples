
import {evaluate} from "mathjs";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max + 1);
};

const createExample = () => {
    let operators = ["+", "-", '/', '*'];
    let operatorIndex = Math.floor(Math.random() * operators.length);
    let operator = operators[operatorIndex];

    let first = 0;
    let second = 0;

    if (operator === '+' || operator === '-') {
      first = getRandomInt(100);
      second = getRandomInt(100);
    } else if (operator === '/') {
      second = getRandomInt(10)
      first = getRandomInt(10) * second; 
    } else if (operator === '*') {
      first = getRandomInt(10)
      second = getRandomInt(10)
    }
    
    let result = evaluate(`${first}${operator}${second}`);

    const example= {
        first,
        second,
        operator,
        result
    }
  return example;
};

export default createExample;
