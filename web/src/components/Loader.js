import Gif from '../images/Loader.gif';
import '../stylesheets/loader.scss';

const Loader = () => {
    return (
        <img className='loader' src={Gif} alt='Cargando página web...'/>
    )
};

export default Loader;