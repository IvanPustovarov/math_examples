import React, { useState, useEffect } from "react";
import Example from "./Example";

const ExampleTable = (props) => {
  const [example, setExample] = useState(props.array);
  return (
    <div>
    <form>
      {example.map((elem, index) => (
        <ul key={index}>
          <Example example={elem} />
        </ul>
      ))}
      <button type="submit">Send result</button>
      </form>
    </div>
  );
};

export default ExampleTable;
