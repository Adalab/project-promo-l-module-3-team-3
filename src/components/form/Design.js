import React from 'react';
import '../../stylesheets/form/design.scss';
import Palette from './Palette';

function Design() {
  return (
    <section className="collapsable">
      <div className="collapsable__colors">
        <h3 className="collapsable__colors--title">Colores</h3>
      </div>
      <div className="design">
        <Palette i={0} />
        <Palette i={1} />
        <Palette i={2} />
      </div>
    </section>
  );
}

export default Design;
