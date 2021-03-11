import React from 'react';
import '../../stylesheets/form/form.scss';
import Collapsable from './Collapsable';
import Design from './Design';
import Share from './Share';
import Fillin from './Fillin';

class Form extends React.Component {
  render() {
    return (
      <form className="form js-submit">
        <Collapsable name="Diseña" icon="far fa-object-ungroup" open>
          <Design data={this.props.data} handlePalette={this.props.handlePalette} />
        </Collapsable>

        <Collapsable name="Rellena" icon="fa fa-keyboard-o">
          <Fillin handleInput={this.props.handleInput} data={this.props.data} profile={this.props.profile} updateAvatar={this.props.updateAvatar}/>
        </Collapsable>

        <Collapsable name="Comparte" icon="fas fa-share-alt">
          <Share />
        </Collapsable>
      </form>
    );
  }
}

export default Form;
