import React from 'react';
import '../../stylesheets/preview/preview.scss';
import Profile from '../preview/Profile';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <article className={`preview__container js-card palette-${this.props.palette}`}>
          <h2 className="preview__container--h2 js-card-name js-card">{this.props.data.name || 'Nombre Apellidos'}</h2>
          <p className="preview__container--h3 js-card-job js-card">{this.props.data.job || 'Front-end unicorn'}</p>
          <div className="preview__container--line"></div>
          <img className="preview__container--photo js__profile-image js-big-photo" />
        {/* <Profile avatar={this.props.profile.avatar} /> */}
          <ul className="card__icons js-card">
            <li className="card__icons--item1">
              {this.props.data.phone ?  <a href={`tel:${this.props.data.phone}`} className="fas fa-mobile-alt icons js-card-phone card__icons--item2"></a> : 
              <span className="fas fa-mobile-alt icons js-card-phone card__icons--item2"></span>}
            </li>
            <li className="card__icons--item1">
              {this.props.data.email ?  <a href={`mailto:${this.props.data.email}`} className="far fa-envelope icons js-card-email card__icons--item2"></a> : 
              <span className="far fa-envelope icons js-card-email card__icons--item2"></span>}
            </li>
            <li className="card__icons--item1">
              {this.props.data.linkedin ?  <a href={`https://www.linkedin.com/in/${this.props.data.linkedin}`} target='_blank' className="fab fa-linkedin-in icons js-card-linkedin card__icons--item2"></a> : 
              <span className="fab fa-linkedin-in icons js-card-linkedin card__icons--item2"></span>}

            </li>
            <li className="card__icons--item1">
              {this.props.data.github ?  <a href={`https://www.github.com/${this.props.data.github}`} target='_blank' className="fab fa-github-alt icons js-card-github card__icons--item2"></a> : 
              <span className="fab fa-github-alt icons js-card-github card__icons--item2"></span>}
            </li>
          </ul>
        </article>
      </section>
    );
  }
}

export default Preview;
