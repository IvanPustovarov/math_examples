import React, { useState,useEffect } from "react";
import Example from "./Example";

const ARGUMENT = 100;
const getRandomInt = () => {
  return Math.floor(Math.random() * ARGUMENT);
};

const ExampleTable = () => {
  const [examples, setExamples] = useState({});
  useEffect(() => {
      //func
  }, [])
  return <div></div>;
};

export default ExampleTable;
