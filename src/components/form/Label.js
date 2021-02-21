import React from "react";

function Label(props) {
  return (
    <label htmlFor={props.htmlFor} className='fillin__label'>
      {props.labelText}
    </label>
  );
}
export default Label;
