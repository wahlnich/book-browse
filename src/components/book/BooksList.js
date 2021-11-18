import React from 'react';
import Book from './Book';

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

  return <div>{booksList}</div>;
}
