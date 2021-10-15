import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.showModal}
      style={{
        padding: "10px",
        margin: "15px 0",
        borderRadius: "8px",
        background: "coral",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
