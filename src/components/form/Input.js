import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      className={props.className}
      placeholder={props.placeholder}
      required
    />
  );
}
export default Input;
