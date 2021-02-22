import React from "react";

function InputGroup(props) {
  return (
    <>
    <label htmlFor={props.htmlFor} className='fillin__label'>
      {props.labelText}
    </label>
    <input
      type={props.type}
      id={props.id}
      className={props.className}
      placeholder={props.placeholder}
      required
    />
    </>
    
  );
}
export default InputGroup;
