import React from 'react';
import '../../stylesheets/form/form.scss';
import Collapsable from './Collapsable';
import Design from './Design';
import Share from './Share';
import Fillin from './Fillin';

function Form() {
  return (
    <form className="form js-submit">
      <Collapsable>
        <Design />
      </Collapsable>

      <Collapsable>
        <Fillin />
      </Collapsable>

      <Collapsable>
        <Share />
      </Collapsable>
    </form>
  );
}

export default Form;
