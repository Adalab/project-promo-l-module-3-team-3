import React from 'react';
import '../stylesheets/Footer.scss';
import logoAdalab from '../images/logo-adalab.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__copy">
            <p>Look Like Loop cards &copy; 2021</p>
          </div>
          <div>
            <a href="https://adalab.es/" target="_blank">
              <img className="footer__logo" src={logoAdalab} alt="logo adalab" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
