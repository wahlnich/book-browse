import React from 'react';
import Book from './Book';
import classes from './BooksList.module.css';

export default function BooksList(props) {
  const booksList = props.booksData.map((book) => (
    <Book
      key={book.isbn}
      isbn={book.isbn}
      title={book.title}
      author={book.author}
      description={book.description}
      onShowModal={props.onShowModal}
    />
  ));

  return <div className={classes['books-list']}>{booksList}</div>;
}
