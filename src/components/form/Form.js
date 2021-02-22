import React from 'react';
import '../../stylesheets/form/form.scss';
import Design from './Design';

function Form() {
  return (
    <form className="form js-submit">
      <Design></Design>

      <section className="collapsable">
        <div className="header-container collapsable__content js-collapsable">
          <div className="collapsable__header">
            <i className="collapsable__header--icon fa fa-keyboard-o"></i>
            <h2 className="collapsable__header--title">Rellena</h2>
          </div>
          <div className="collapsable__header2">
            <i className="collapsable__header--arrow fas fa-chevron-down js-collapsable-arrow"></i>
          </div>
        </div>
        <div className="fillin-content collapsable__box js-collapsable-close">
          <label htmlFor="name" className="fillin__label">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            className="fillin__input js-input-name js-input-text"
            placeholder="Ej: Sally Jill"
            required
          />

          <label htmlFor="job" className="fillin__label">
            Puesto
          </label>
          <input
            type="text"
            id="job"
            className="fillin__input js-input-job js-input-text"
            placeholder="Ej: Front-end unicorn"
            required
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

          <label htmlFor="email" className="fillin__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="fillin__input js-input-email js-input-text"
            placeholder="Ej: sally-hill@gmail.com"
            required
          />

          <label htmlFor="phone" className="fillin__label">
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            className="fillin__input js-input-phone js-input-text"
            placeholder="Ej: 555-55-55-55"
            required
          />

          <label htmlFor="linkedin" className="fillin__label">
            Linkedin
          </label>
          <input
            type="text"
            id="linkedin"
            className="fillin__input js-input-linkedin js-input-text"
            placeholder="Ej: linkedin.com/in/sally.hill"
            required
          />

          <label htmlFor="github" className="fillin__label">
            GitHub
          </label>
          <input
            type="text"
            id="github"
            className="fillin__input js-input-github js-input-text"
            placeholder="Ej: @sally-hill"
            required
          />
        </div>
      </section>
      <section className="collapsable collapsable3">
        <div className="header-container collapsable__content js-collapsable">
          <div className="collapsable__header">
            <i className="collapsable__header--icon fas fa-share-alt"></i>
            <h2 className="collapsable__header--title">Comparte</h2>
          </div>
          <div className="collapsable__header2">
            <i className="collapsable__header--arrow fas fa-chevron-down js-collapsable-arrow"></i>
          </div>
        </div>
        <div className="share-container collapsable__box js-collapsable-close">
          <div className="collapsable__share js-createbtn-container">
            <i className="collapsable__share--icon far fa-address-card"></i>
            <a href="#" className="js-create-btn">
              Crear tarjeta
            </a>
            <div className="js-card-result hidden"></div>
          </div>
        </div>
        <div className="share-preview-container"></div>
        <div className="share-card hidden js-share__container">
          <h2 className="share-card__title js-created">La tarjeta ha sido creada:</h2>
          <a className="share-card__link js-share__link" href=""></a>
          <button className="share-card__button js-twitter-btn">
            <a className="js-twitter-link" href="" target="blank">
              <i className="fab fa-twitter"></i>Compartir en Twitter
            </a>
          </button>
        </div>
      </section>
    </form>
  );
}

export default Form;
