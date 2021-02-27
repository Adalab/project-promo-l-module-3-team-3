import React from 'react';
import '../../stylesheets/preview/card.scss';

function Card() {
    return (
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
            <a href="#" target="_blank" className="fab fa-linkedin-in icons js-card-linkedin card__icons--item2"></a>
          </li>
          <li className="card__icons--item1">
            <a href="#" target="_blank" className="fab fa-github-alt icons js-card-github card__icons--item2"></a>
          </li>
        </ul>
      </article>
    </section>
  );
}
export default Card;
