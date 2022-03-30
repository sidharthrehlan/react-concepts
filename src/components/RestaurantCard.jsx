import React from 'react';

function RestaurantCard({ image, name, rating, distance }) {
  return (
    <div className='rcard'>
      <img className='rcard-image' src={image} alt={name} />
      <span className='rcard-name'>{name}</span>
      <span className='rcard-rating'>{rating}</span>
      <span className='rcard-distance'>{distance}</span>
    </div>
  );
}

export default RestaurantCard;
