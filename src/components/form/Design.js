import React from 'react';
// import '../../stylesheets/form/design.scss';
import Palette from './Palette';

class Design extends React.Component {
  render() {
    return (
      <section className="collapsable">
        <div className="collapsable__colors">
          <h3 className="collapsable__colors--title">Colores</h3>
        </div>
        <div className="design">
          <Palette i={1} palette={this.props.data.palette} handlePalette={this.props.handlePalette} />
          <Palette i={2} palette={this.props.data.palette} handlePalette={this.props.handlePalette} />
          <Palette i={3} palette={this.props.data.palette} handlePalette={this.props.handlePalette} />
        </div>
      </section>
    );
  }
}

export default Design;