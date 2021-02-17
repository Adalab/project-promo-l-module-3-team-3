import React from 'react';
import '../stylesheets/App.scss';
//import './Header';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container__generator">
        <div className="preview">
          <div className="preview__reset">
            <button className="preview__reset--reset js-reset">
              <i className="far fa-trash-alt"></i>
              <a className="button__reset" href="">
                Reset
              </a>
            </button>
          </div>
          <section>
            <article className="preview__container js-card">
              <h2 className="preview__container--h2 js-card-name js-card">Nombre Apellidos</h2>
              <p className="preview__container--h3 js-card-job js-card">Front-end developer</p>
              <div className="preview__container--line"></div>
              <img className="preview__container--photo js__profile-image js-big-photo" />
              <ul className="card__icons js-card">
                <li className="card__icons--item1">
                  <a href="#" target="_blank" className="fas fa-mobile-alt icons js-card-phone card__icons--item2"></a>
                </li>
                <li className="card__icons--item1">
                  <a href="#" target="_blank" className="far fa-envelope icons js-card-email card__icons--item2"></a>
                </li>
                <li className="card__icons--item1">
                  <a
                    href="#"
                    target="_blank"
                    className="fab fa-linkedin-in icons js-card-linkedin card__icons--item2"
                  ></a>
                </li>
                <li className="card__icons--item1">
                  <a href="#" target="_blank" className="fab fa-github-alt icons js-card-github card__icons--item2"></a>
                </li>
              </ul>
            </article>
          </section>
        </div>
        <form className="form js-submit">
          <section className="collapsable">
            <div className="header-container collapsable__content js-collapsable">
              <div className="collapsable__header">
                <i className="collapsable__header--icon far fa-object-ungroup"></i>
                <h2 className="collapsable__header--title">Diseña</h2>
              </div>
              <div className="collapsable__header2">
                <i className="collapsable__header--arrow fas fa-chevron-down js-collapsable-arrow"></i>
              </div>
            </div>
            <div className="collapsable__box js-collapsable-close">
              <div className="collapsable__colors">
                <h3 className="collapsable__colors--title">Colores</h3>
              </div>
              <div className="collapsable__content design">
                <label className="display-block design__square-label">
                  <input type="radio" name="palette" className="design__square-radio js-palette" value="1" />
                  <ul className="palette-1">
                    <li className="design__square-color color-1"></li>
                    <li className="design__square-color color-2"></li>
                    <li className="design__square-color color-3"></li>
                  </ul>
                </label>

                <label className="display-block design__square-label">
                  <input type="radio" name="palette" className="design__square-radio js-palette" value="2" />
                  <ul className="palette-2">
                    <li className="design__square-color color-1"></li>
                    <li className="design__square-color color-2"></li>
                    <li className="design__square-color color-3"></li>
                  </ul>
                </label>

                <label className="display-block design__square-label">
                  <input type="radio" name="palette" className="design__square-radio js-palette" value="3" />
                  <ul className="palette-3">
                    <li className="design__square-color color-1"></li>
                    <li className="design__square-color color-2"></li>
                    <li className="design__square-color color-3"></li>
                  </ul>
                </label>
              </div>
              <div className="collapsable__typo">
                <h3 className="collapsable__typo--title">Tipografías</h3>
              </div>
              <div className="collapsable__content typo">
                <label className="display-block design__square-label">
                  <input type="radio" name="typo" className="design__square-radio js-typo" value="1" />
                  <ul className="padd_typo1 typography-1">
                    <li className="style__typo typo-1">Classic</li>
                  </ul>
                </label>

                <label className="display-block design__square-label">
                  <input type="radio" name="typo" className="design__square-radio js-typo" value="2" />
                  <ul className="padd_typo2 typography-2">
                    <li className="style__typo typo-2">Sketch</li>
                  </ul>
                </label>

                <label className="display-block design__square-label">
                  <input type="radio" name="typo" className="design__square-radio js-typo" value="3" />
                  <ul className="padd_typo3 typography-3">
                    <li className="style__typo typo-3">L o o p</li>
                  </ul>
                </label>
              </div>
            </div>
          </section>

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
      </div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__copy">
            <p>Look Like Loop cards &copy; 2021</p>
          </div>
          <div>
            <a href="https://adalab.es/" target="_blank">
              <img className="footer__logo" src="./assets/images/logo-adalab.png" alt="logo adalab" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
