import React from "react";
import "../../stylesheets/form/form.scss";
import Design from "./Design";
import Share from './Share';
import Fillin from "./Fillin";

function Form() {
  return (
    <form className='form js-submit'>
      <Design></Design>
      <Fillin />
      <Share />
    </form>
  );
}

export default Form;
