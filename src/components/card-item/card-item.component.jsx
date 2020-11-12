import React from 'react';

import './card-item.styles.scss';

const CardItem =  ({ imageUrl, title, text }) => (
  <div className="card-item">
    <div className="card-box">
      <div className="card-image">
        <img src= {imageUrl} />
      </div>

      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p>{text}</p>
        <span>SHOP NOW</span>
      </div>
    </div>
  </div>
);

export default CardItem;