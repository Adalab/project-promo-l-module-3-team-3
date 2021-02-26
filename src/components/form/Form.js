import React from 'react';
import '../../stylesheets/form/form.scss';
import Collapsable from './Collapsable';
import Design from './Design';
import Share from './Share';
import Fillin from './Fillin';

function Form() {
  return (
    <form className="form js-submit">
      <Collapsable name="Diseña" icon="far fa-object-ungroup" open>
        <Design />
      </Collapsable>

      <Collapsable name="Rellena" icon="fa fa-keyboard-o">
        <Fillin />
      </Collapsable>

      <Collapsable name="Comparte" icon="fas fa-share-alt">
        <Share />
      </Collapsable>
    </form>
  );
}

export default Form;
