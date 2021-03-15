import "../../stylesheets/form/shareDetail.scss";

const ShareDetail = (props) => {
if (props.data.serverData.success === true) {
    return (            
            <div className='share-card'>
                <h2 className='share-card__text'>
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
} else {
    return (            
            <div className='share-card'>
                <p>Debes cumplimentar todos los campos para poder crear tu enlace</p>
            </div>
    );
}


}
export default ShareDetail;