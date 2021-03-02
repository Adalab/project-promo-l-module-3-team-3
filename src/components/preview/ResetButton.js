import React from 'react';
import '../../stylesheets/preview/resetButton.scss';

const ResetButton = (props) => {
  const handleReset = (ev) => {
    props.handleReset();
  };

  return (
    <div className="preview__reset">
      <button className="preview__reset--reset js-reset button__reset" onClick={handleReset}>
        <i className="far fa-trash-alt "></i>
        Reset
      </button>
    </div>
  );
};

export default ResetButton;
