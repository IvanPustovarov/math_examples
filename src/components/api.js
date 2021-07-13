import { column } from "mathjs";
import React, { useState } from "react";

const NUMBER = 100;

const getRandomInt = () => {
  return Math.floor(Math.random() * NUMBER + 1);
};

const createArguments = () => {
  const examples = [];

  for (let index = 0; index < 10; index++) {
    let operators = ["+", "-", "*", "/"];
    let numberOperator = Math.floor(Math.random() * operators.length);
    let operator = operators[numberOperator];

    const example= {
        first: getRandomInt(),
        second: getRandomInt(),
        operator
    }
    examples.push(example);
  }
  return examples;
};

export default createArguments;
