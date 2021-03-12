import React from 'react';
import '../../stylesheets/preview/resetButton.scss';

const ResetButton = (props) => {
  const handleReset = (ev) => {
    props.handleReset();
  };

  return (
      <button className="reset__button" onClick={handleReset}>
        <i className="far fa-trash-alt reset__button--icon "></i>
        Reset
      </button>
  );
};

export default ResetButton;
