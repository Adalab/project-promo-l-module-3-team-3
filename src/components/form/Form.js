import React from 'react';
import '../../stylesheets/form/form.scss';
import Collapsable from './Collapsable';
import Design from './Design';
import Share from './Share';
import Fillin from './Fillin';

function Form() {
  return (
    <form className="form js-submit">
      <Collapsable name="Diseña" icon="fas fa-chevron-down" open>
        <Design />
      </Collapsable>

      <Collapsable name="Rellena" icon="fas fa-chevron-down">
        <Fillin />
      </Collapsable>

      <Collapsable name="Comparte" icon="fas fa-chevron-down">
        <Share />
      </Collapsable>
    </form>
  );
}

export default Form;
