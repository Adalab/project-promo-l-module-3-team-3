import React from 'react';
import '../../stylesheets/form/design.scss';
import Palette from './Palette';

class Design extends React.Component {
  render() {
    return (
      <section className="collapsable">
        <div className="collapsable__colors">
          <h3 className="collapsable__colors--title">Colores</h3>
        </div>
        <div className="design">
          <Palette i={0} handlePalette={this.props.handlePalette} />
          <Palette i={1} handlePalette={this.props.handlePalette} />
          <Palette i={2} handlePalette={this.props.handlePalette} />
        </div>
      </section>
    );
  }
}

export default Design;