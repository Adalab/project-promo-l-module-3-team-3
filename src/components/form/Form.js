import React from "react";
import "../../stylesheets/form/form.scss";
import Design from "./Design";
import Fillin from "./Fillin";

function Form() {
  return (
    <form className='form js-submit'>
      <Design></Design>
      <Fillin />
      <section className='collapsable collapsable3'>
        <div className='header-container collapsable__content js-collapsable'>
          <div className='collapsable__header'>
            <i className='collapsable__header--icon fas fa-share-alt'></i>
            <h2 className='collapsable__header--title'>Comparte</h2>
          </div>
          <div className='collapsable__header2'>
            <i className='collapsable__header--arrow fas fa-chevron-down js-collapsable-arrow'></i>
          </div>
        </div>
        <div className='share-container collapsable__box js-collapsable-close'>
          <div className='collapsable__share js-createbtn-container'>
            <i className='collapsable__share--icon far fa-address-card'></i>
            <a href='#' className='js-create-btn'>
              Crear tarjeta
            </a>
            <div className='js-card-result hidden'></div>
          </div>
        </div>
        <div className='share-preview-container'></div>
        <div className='share-card hidden js-share__container'>
          <h2 className='share-card__title js-created'>
            La tarjeta ha sido creada:
          </h2>
          <a className='share-card__link js-share__link' href=''></a>
          <button className='share-card__button js-twitter-btn'>
            <a className='js-twitter-link' href='' target='blank'>
              <i className='fab fa-twitter'></i>Compartir en Twitter
            </a>
          </button>
        </div>
      </section>
    </form>
  );
}

export default Form;
