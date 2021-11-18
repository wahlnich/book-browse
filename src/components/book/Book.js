import React from 'react';
import classes from './Book.module.css';

// props received are dummyData and onShowModal
function Book(props) {
  const imageAPIString = (isbn) => {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
  };

  return (
    <div onClick={props.onShowModal} className={classes.book}>
      <div>
        <img src={imageAPIString(props.isbn)} alt={props.title} />
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        {/*<button onClick={props.onShowModal}>Click to Show Modal</button>*/}
      </div>
    </div>
  );
}

export default Book;
