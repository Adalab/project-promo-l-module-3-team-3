import React from 'react';
import '../../stylesheets/form/fillin.scss';
import InputGroup from './InputGroup';
import GetAvatar from './GetAvatar';
import Profile from '../preview/Profile';

class Fillin extends React.Component {
  render() {
    return (
      <section className="collapsable">
        <div className="fillin-content collapsable__box js-collapsable-close">
          <InputGroup
            className="fillin__input js-input-name js-input-text"
            text="Nombre completo"
            placeText="Ej: Sally Hill"
            name="name"
            handleInput={this.props.handleInput}
            value={this.props.data.name}
          />

          <InputGroup
            className="fillin__input js-input-job js-input-text"
            text="Puesto"
            placeText="Ej: Front-end unicorn"
            name="job"
            handleInput={this.props.handleInput}
            value={this.props.data.job}
          />

          <label htmlFor="photo" className="fillin__label">
            Imagen de perfil
          </label>
          <GetAvatar 
          avatar={this.props.profile.avatar} 
          isAvatarDefault={this.props.isAvatarDefault} 
          updateAvatar={this.props.updateAvatar} />
          <InputGroup
            className="fillin__input js-input-email js-input-text"
            text="Email"
            placeText="Ej: sally-hill@gmail.com"
            name="email"
            handleInput={this.props.handleInput}
            value={this.props.data.email}
          />
          <InputGroup
            className="fillin__input js-input-phone js-input-text"
            text="Teléfono"
            placeText="Ej: 555-55-55-55"
            name="phone"
            handleInput={this.props.handleInput}
            value={this.props.data.phone}
          />

          <InputGroup
            className="fillin__input js-input-linkedin js-input-text"
            text="Linkedin"
            placeText="Ej: linkedin.com/in/sally.hill"
            name="linkedin"
            handleInput={this.props.handleInput}
            value={this.props.data.linkedin}
          />

          <InputGroup
            className="fillin__input js-input-github js-input-text"
            text="GitHub"
            placeText="Ej: @sally-hill"
            name="github"
            handleInput={this.props.handleInput}
            value={this.props.data.github}
          />
        </div>
      </section>
    );
  }
}
export default Fillin;
