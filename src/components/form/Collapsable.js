import React, { useState } from 'react';
import '../../stylesheets/form/collapsable.scss';

function Collapsable(props) {
  const [open, setOpen] = useState(!!props.open);

  const handleClick = () => {
    setOpen(!open);
  };

  const openClassName = open ? '' : 'close';

  return (
    <div className={`collapsable ${openClassName}`} >
      <div className="collapsable__header" onClick={handleClick} >
        <i className={`collapsable__header--icon ${props.icon}`}></i>
        <h2 className="collapsable__header--title">{props.name}</h2>
        <i className="collapsable__header--arrow fas fa-chevron-up"></i>
      </div>
      <div className="collapsable__content">{props.children}</div>
    </div>
  );
}

export default Collapsable;
