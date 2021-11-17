import React from 'react';
import classes from './Book.module.css';
import image from '../../assets/dummyCover.jpg';

// props received are dummyData and onShowModal
function Book(props) {
  return (
    <div onClick={props.onShowModal} className={classes.book}>
      <div>
        <img src={image} alt="Priory of the orange tree" />
        <h1>{props.dummyData.title}</h1>
        <h2>{props.dummyData.author}</h2>
        {/*<button onClick={props.onShowModal}>Click to Show Modal</button>*/}
      </div>
    </div>
  );
}

export default Book;
