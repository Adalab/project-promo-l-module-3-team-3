import React from 'react';
import '../../stylesheets/form/fillin.scss';
import InputGroup from './InputGroup';

class Fillin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="collapsable">
        <div className="fillin-content collapsable__box js-collapsable-close">
          <InputGroup
            text="Nombre completo"
            placeText="Ej: Sally Jill"
            name="name"
            handleInput={this.props.handleInput}
            value={this.props.data.name}
          />

          <InputGroup
            text="Puesto"
            placeText="Ej: Front-end unicorn"
            name="job"
            handleInput={this.props.handleInput}
            value={this.props.data.job}
            className="fillin__input js-input-job js-input-text"
          />

          <label htmlFor="photo" className="fillin__label">
            Imagen de perfil
          </label>

          <div className="fillin__photo">
            <button className="fillin__photo--button js__profile-trigger">Añadir imagen</button>
            <input
              type="file"
              name="photo"
              id="img-selector"
              className="hidden-field input-required js__profile-upload-btn"
              required
            />
            <div className="fillin__photo--preview js__profile-preview js-small-photo"></div>
          </div>

          <InputGroup
            htmlFor="email"
            labelText="Email"
            type="email"
            id="email"
            className="fillin__input js-input-email js-input-text"
            placeholder="Ej: sally-hill@gmail.com"
          />
          <InputGroup
            htmlFor="phone"
            labelText="Teléfono"
            type="text"
            id="phone"
            className="fillin__input js-input-phone js-input-text"
            placeholder="Ej: 555-55-55-55"
          />

          <InputGroup
            htmlFor="linkedin"
            labelText="Linkedin"
            type="text"
            id="linkedin"
            className="fillin__input js-input-linkedin js-input-text"
            placeholder="Ej: linkedin.com/in/sally.hill"
          />

          <InputGroup
            htmlFor="github"
            labelText="GitHub"
            type="text"
            id="github"
            className="fillin__input js-input-github js-input-text"
            placeholder="Ej: @sally-hill"
          />
        </div>
      </section>
    );
  }
}
export default Fillin;
