import React, { useState } from "react";
import Example from "./Example";

const ExampleTable = (props) => {

  const createArguments = props.createArguments;


  const handleSubmit = (event) => {

  };

  const resultCount = (answer) => {

  };

  const getAnswerArray = () => {

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit" onSubmit={() => handleSubmit}>Send result</button>
      </form>
    </div>
  );
};

export default ExampleTable;
