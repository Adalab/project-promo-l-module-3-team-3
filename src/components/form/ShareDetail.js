import "../../stylesheets/form/share.scss";

const ShareDetail = (props) => {

    return (            
            <div className='share-card hidden js-share__container js-card-result'>
                <h2 className='share-card__text js-created'>
                        La tarjeta ha sido creada:
                </h2>
                <a href={props.data.serverData.cardURL} target='_blank'><p>{props.data.serverData.cardURL}</p></a>
                <button className='share-card__button js-twitter-btn'>
                    <a className='js-twitter-link' href='' target='blank'>
                        <i className='fab fa-twitter'></i> Compartir en Twitter
                    </a>
                </button>
            </div>
    
    );
}
export default ShareDetail;