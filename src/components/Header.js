import React from 'react';
import '../stylesheets/header.scss';
import logoCards from '../images/Logo_cards.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="page__header">
          <a href="./index.html" title="Home">
            <img className="page__header--logo" src={logoCards} alt="logo page" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
