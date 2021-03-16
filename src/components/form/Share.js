import { useState } from 'react';
import "../../stylesheets/form/share.scss";

const Share = (props) => {
    const [open, setOpen] = useState(false);
    
    const handleShare = () => {
        props.handleShare();
        setOpen(true);
    };

     const openClassName = open ? '' : 'close';

    return (
    <section className={`collapsable collapsable3 share__container ${openClassName}`}>
            <button className='share__button' onClick={handleShare}>
                <i className='share__button--icon far fa-address-card'></i>
                Crear tarjeta
            </button>  

        <div className="collapsable__content">{props.children}</div>
    </section>
    );
}
export default Share;