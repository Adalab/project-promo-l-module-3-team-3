import React from 'react';
import '../stylesheets/header.scss';
import logoCards from '../images/Logo_cards.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="page__header">
          <Link to='/' title="Home">
            <img className="page__header--logo" src={logoCards} alt="logo page" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
