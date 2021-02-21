import React from "react";
import "../../stylesheets/form/fillin.scss";
import Label from "./Label";
import Input from "./Input"

function Fillin() {
    return (
<section className='collapsable'>
        <div className='header-container collapsable__content js-collapsable'>
          <div className='collapsable__header'>
            <i className='collapsable__header--icon fa fa-keyboard-o'></i>
            <h2 className='collapsable__header--title'>Rellena</h2>
          </div>
          <div className='collapsable__header2'>
            <i className='collapsable__header--arrow fas fa-chevron-down js-collapsable-arrow'></i>
          </div>
        </div>
        <div className='fillin-content collapsable__box js-collapsable-close'>
          <Label htmlFor='name' labelText='Nombre completo'/>
          <Input type='text' id='name' className='fillin__input js-input-name js-input-text' placeholder='Ej: Sally Jill' />

          <Label htmlFor='job' labelText='Puesto' />
          <Input type='text' id='job' className='fillin__input js-input-job js-input-text' placeholder='Ej: Front-end unicorn' />

          <Label htmlFor='photo' labelText='Imagen de perfil' />
            
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

          <Label htmlFor='email' labelText='Email' />
          <Input type='email' id='email' className='fillin__input js-input-email js-input-text' placeholder='Ej: sally-hill@gmail.com' />

          <Label htmlFor='phone' labelText='Teléfono' />
          <Input type='text' id='phone' className='fillin__input js-input-phone js-input-text' placeholder='Ej: 555-55-55-55' />

          <Label htmlFor='linkedin' labelText='Linkedin' />
          <Input type='text' id='linkedin' className='fillin__input js-input-linkedin js-input-text' placeholder='Ej: linkedin.com/in/sally.hill' />

          <Label htmlFor='github' labelText='GitHub' />
          <Input type='text' id='github' className='fillin__input js-input-github js-input-text' placeholder='Ej: @sally-hill' />
        </div>
    </section>
    );
}
export default Fillin