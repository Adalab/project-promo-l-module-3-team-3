import React from 'react';
import '../../stylesheets/preview/resetButton.scss';

const ResetButton = (props) => {
  const handleReset = (ev) => {
    props.handleReset();
  };

  return (
    <div className="preview__reset">
      <button className="preview__reset--reset js-reset" onClick={handleReset}>
        <i className="far fa-trash-alt"></i>
        <a className="button__reset" href="">
          Reset
        </a>
      </button>
    </div>
  );
};

export default ResetButton;
