import "../../stylesheets/form/share.scss";

const Share = (props) => {
    const handleShare = () => {
        props.handleShare();
    };

    return (
    <section className='collapsable collapsable3 share__container'>
            <button className='share__button' onClick={handleShare}>
                <i className='share__button--icon far fa-address-card'></i>
                Crear tarjeta
            </button>  

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
    );
}
export default Share;