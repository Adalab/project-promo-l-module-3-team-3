import React from 'react';
import ResetButton from './ResetButton';
import Card from './Card';
import '../../stylesheets/preview/preview.scss';

function Preview() {
  return (
    <div className="preview">
      <ResetButton />
      <Card />
    </div>
  );
}

export default Preview;
