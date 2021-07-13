import React, { useState, useEffect } from "react";
import {evaluate} from "mathjs";
import "./App.css";
import Example from "./components/Example";
import ExampleTable from "./components/ExampleTable";

import createArguments from "./components/api";

function App() {

  // useEffect(() => {
  //   // createArguments();
  // }, [])
  return (
    <div className="App">
      Math examples
      <ExampleTable key={createArguments.index} array={createArguments}/>
    </div>
  );
}

export default App;
