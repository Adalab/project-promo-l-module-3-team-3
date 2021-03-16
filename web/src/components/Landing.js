import '../stylesheets/landing.scss';
import logo from '../images/Logo_cards.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Landing = () => {
    return (
        <>
        <main className="main">
            <div className="main__content">
                <img className="main__content--logo"
                    src={logo}
                    alt="look like loop"
                    title="Look Like Loop" />
                <h2 className="main__content--subtitle">Crea tu tarjeta de visita</h2>
                <p className="main__content--text">
                Crea mejores contactos profesionales de forma fácil y cómoda
                </p>
                <ul className="main__list">
                    <li className="main__list--item">
                        <i className="far fa-object-ungroup"></i>
                        <p className="main__actions--textIcons">Diseña</p>
                    </li>
                    <li className="main__list--item">
                        <i className="far fa-keyboard"></i>
                        <p className="main__actions--textIcons">Rellena</p>
                    </li>
                    <li className="main__list--item">
                        <i className="fas fa-share-alt"></i>
                        <p className="main__actions--textIcons">Comparte</p>
                    </li>
                </ul>
            </div>
            <button className="main__content--button">
                <Link to='/cardGenerator'> Comenzar</Link>
            </button>
        </main>
        <Footer />
        </>
    )
}

export default Landing;