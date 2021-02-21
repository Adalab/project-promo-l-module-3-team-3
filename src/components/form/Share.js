import "../../stylesheets/form/share.scss";

const Share = (props) =>
    <> 
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
    </>
 

export default Share;