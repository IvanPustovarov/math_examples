import React from "react";
import "./App.css";
import ExampleTable from "./components/ExampleTable";

import createArguments from "./api";

function App() {
  return (
    <div className="App">
      Math examples
      <ExampleTable createArguments={createArguments}/>
    </div>
  );
}

export default App;
