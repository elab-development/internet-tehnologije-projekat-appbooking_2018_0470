import React from 'react';
import { Link } from 'react-router-dom';

import './searchItem.css';

const SearchItem = ({ item }) => {
  return (
    <div className='searchItem'>
      <img
        src={
          item.photos[0]
            ? item.photos[0]
            : 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg'
        }
        alt={item.name}
        className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>{item.name}</h1>
        <span className='siDistance'>{item.distance}m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='siFeatures'>{item.desc}</span>
        <span className='siCancelOp'>Free cancellation </span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
        {item.rating && (
          <div className='siRating'>
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className='siDetailTexts'>
          <span className='siPrice'>${item.cheapestPrice}</span>
          <span className='siTaxOp'>Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className='siCheckButton'>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
