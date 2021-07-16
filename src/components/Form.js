import React from "react";
import "../styles/form.css"

const Form = ({handleNameChange, name}) => {
  const handleChange = (event) => {
    const name = event.target.value;
    handleNameChange(name);
  };

  return (
    <div className="form">
      <span className="form_title">Enter your name:</span>
      <input
        type="text"
        className="form_input"
        value={name}
        onChange={handleChange}
        required="required"
      />
    </div>
  );
};

export default Form;
