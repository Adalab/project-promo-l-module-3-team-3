import React from "react";
import "../../stylesheets/form/fillin.scss";
import InputGroup from "./InputGroup";
import Collapsable from './Collapsable';

function Fillin() {
  return (
    <section className='collapsable'>
       <Collapsable
            name = 'Rellena'
            icon='collapsable__header--icon fa fa-keyboard-o'
        />
      <div className='fillin-content collapsable__box js-collapsable-close'>
        <InputGroup
          htmlFor='name'
          labelText='Nombre completo'
          type='text'
          id='name'
          className='fillin__input js-input-name js-input-text'
          placeholder='Ej: Sally Jill'
        />

        <InputGroup
          htmlFor='job'
          labelText='Puesto'
          type='text'
          id='job'
          className='fillin__input js-input-job js-input-text'
          placeholder='Ej: Front-end unicorn'
        />

        <label for='photo' class='fillin__label'>
          Imagen de perfil
        </label>

        <div className='fillin__photo'>
          <button className='fillin__photo--button js__profile-trigger'>
            Añadir imagen
          </button>
          <input
            type='file'
            name='photo'
            id='img-selector'
            className='hidden-field input-required js__profile-upload-btn'
            required
          />
          <div className='fillin__photo--preview js__profile-preview js-small-photo'></div>
        </div>

        <InputGroup
          htmlFor='email'
          labelText='Email'
          type='email'
          id='email'
          className='fillin__input js-input-email js-input-text'
          placeholder='Ej: sally-hill@gmail.com'
        />
        <InputGroup
          htmlFor='phone'
          labelText='Teléfono'
          type='text'
          id='phone'
          className='fillin__input js-input-phone js-input-text'
          placeholder='Ej: 555-55-55-55'
        />

        <InputGroup
          htmlFor='linkedin'
          labelText='Linkedin'
          type='text'
          id='linkedin'
          className='fillin__input js-input-linkedin js-input-text'
          placeholder='Ej: linkedin.com/in/sally.hill'
        />

        <InputGroup
          htmlFor='github'
          labelText='GitHub'
          type='text'
          id='github'
          className='fillin__input js-input-github js-input-text'
          placeholder='Ej: @sally-hill'
        />
      </div>
    </section>
  );
}
export default Fillin;
