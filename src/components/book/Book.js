import React from 'react';
import classes from './Book.module.css';

// props received are dummyData and onShowModal
function Book(props) {
  const imageAPIString = (isbn) => {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
  };

  // Onclick group
  // set current book and display the modal
  const clickHandler = () => {
    console.log(props.isbn);
    props.onSetCurrentBook(props.isbn);
    props.onShowModal();
  };

  return (
    <div onClick={clickHandler} className={classes.book}>
      <div>
        <img src={imageAPIString(props.isbn)} alt={props.title} />
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
      </div>
    </div>
  );
}

export default Book;
