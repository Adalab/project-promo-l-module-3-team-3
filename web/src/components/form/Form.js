import React from 'react';
import '../../stylesheets/form/form.scss';
import Collapsable from './Collapsable';
import Design from './Design';
import Share from './Share';
import Fillin from './Fillin';
import ShareDetail from './ShareDetail';

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form js-submit" onSubmit={handleForm}>
      <Collapsable name="Diseña" icon="far fa-object-ungroup" open>
        <Design 
          data={props.data} 
          handlePalette={props.handlePalette} />
      </Collapsable>
      <Collapsable name="Rellena" icon="fa fa-keyboard-o">
        <Fillin 
          handleInput={props.handleInput} 
          data={props.data}
          avatar={props.avatar}
          getAvatar={props.getAvatar} />
      </Collapsable>
      <Collapsable name="Comparte" icon="fas fa-share-alt">
        <Share data={props.data} handleShare={props.handleShare}>
            <ShareDetail data={props.data}/>
        </Share>
      </Collapsable>
    </form>
  );
};

export default Form;
