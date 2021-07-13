import React, { useState,useEffect } from "react";
import Example from "./Example";

const ExampleTable = (props) => {
    const [example, setExample] = useState(props.array);
  return <div>
      {example.map((elem, index)=><ul key={index}>
          <li>{elem.first}</li>
          <li>{elem.operator}</li>
      </ul>)}
  </div>;
};

export default ExampleTable;
