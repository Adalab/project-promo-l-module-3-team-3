import "../../stylesheets/form/share.scss";
import Collapsable from './Collapsable';

const Share = (props) =>
    <section className='collapsable collapsable3 share__container collapsable__box js-collapsable-close'>
            <div className='share__button js-createbtn-container'>
                <i className='share__button--icon far fa-address-card'></i>
                <a href='#' className='share__button--text js-create-btn'>
                Crear tarjeta
                </a>
            </div>            
            <div className='share-card hidden js-share__container js-card-result'>
                <h2 className='share-card__text js-created'>
                        La tarjeta ha sido creada:
                </h2>
                <a className='share-card__link js-share__link' href=''></a>
                <button className='share-card__button js-twitter-btn'>
                    <a className='js-twitter-link' href='' target='blank'>
                        <i className='fab fa-twitter'></i> Compartir en Twitter
                    </a>
                </button>
            </div>
    </section>
 
export default Share;