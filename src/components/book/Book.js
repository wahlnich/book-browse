import React from 'react';
import classes from './Book.module.css';
import image from '../../assets/dummyCover.jpg';

function Book(props) {
  return (
    <div className={classes.book}>
      <div>
        <img src={image} alt="Priory of the orange tree" />
        <h1>{props.name}</h1>
        <h2>{props.author}</h2>
      </div>
    </div>
  );
}

export default Book;
