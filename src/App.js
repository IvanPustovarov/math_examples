import React from "react";
import "./App.css";
import ExampleTable from "./components/ExampleTable";

import createExample from "./api";

function App() {
  return (
    <div className="App">
      Math examples
      <ExampleTable createExample={createExample}/>
    </div>
  );
}

export default App;
