import React from 'react';
import Reset from './Reset';
import Card from './Card';
import '../../stylesheets/preview/preview.scss';

function Preview() {
  return (
    <div className="preview">
      <Reset />
      <Card />
    </div>
  );
}

export default Preview;
