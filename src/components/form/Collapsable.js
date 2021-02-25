import React from 'react';
import '../../stylesheets/form/collapsable.scss';

function Collapsable(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const openClassName = open ? '' : 'close';

  return (
    <div className={`header-container collapsable__content js-collapsable ${openClassName}`} onClick={handleClick}>
      <div className="collapsable__header">
        <i className={props.icon}></i>
        <h2 className="collapsable__header--title">{props.name}</h2>
      </div>
      <div className="collapsable__header2">
        <i className="collapsable__header--arrow fas fa-chevron-down js-collapsable-arrow"></i>
      </div>
      <div className={` ${openClassName}`}>{props.children}</div>
    </div>
  );
}

export default Collapsable;
