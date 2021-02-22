import "../../stylesheets/form/collapsable.scss";

const Collapsable = (props) => 
    <div className='header-container collapsable__content js-collapsable'>
        <div className='collapsable__header'>
            <i className={props.icon}></i>
            <h2 className='collapsable__header--title'>{props.name}</h2>
        </div>
        <div className='collapsable__header2'>
            <i className='collapsable__header--arrow fas fa-chevron-down js-collapsable-arrow'></i>
        </div>
    </div>

export default Collapsable;