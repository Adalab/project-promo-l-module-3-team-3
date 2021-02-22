import React from 'react';
import '../../stylesheets/preview/reset.scss';

function Reset() {
  return (
    <div className="preview__reset">
      <button className="preview__reset--reset js-reset">
        <i className="far fa-trash-alt"></i>
        <a className="button__reset" href="">
          Reset
        </a>
      </button>
    </div>
  );
}

export default Reset;
