import "../../stylesheets/form/share.scss";
import ShareDetail from './ShareDetail';

const Share = (props) => {
    const handleShare = () => {
        props.handleShare();
    };

    const shareDetailComponente = props.data.serverData.success === true ?
    <ShareDetail data={props.data}/> : null
    return (
    <section className='collapsable collapsable3 share__container'>
            <button className='share__button' onClick={handleShare}>
                <i className='share__button--icon far fa-address-card'></i>
                Crear tarjeta
            </button>  

        {shareDetailComponente}
    </section>
    );
}
export default Share;