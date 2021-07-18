import React from "react";
import "./styles/App.css";
import ExampleTable from "./components/ExampleTable";
import {createMediumExample} from "./api";

function App() {
  return (
    <div className="App">
      <h1>Math examples</h1>
      {createMediumExample()}
      <ExampleTable/>
    </div>
  );
}

export default App;
