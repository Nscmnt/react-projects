import React from "react";
import "./Input.css";

const Input = ({ onKeyDown, onChange, value }) => {
  return (
    <div className="input-wrapper ">
      {/* <div className="check-wrapper">
        <div className="input-check"></div>
      </div> */}
      <input
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        className="todo-input"
        type="text"
        placeholder=" Create a new todo..."
        required
      />
    </div>
  );
};

export default Input;
