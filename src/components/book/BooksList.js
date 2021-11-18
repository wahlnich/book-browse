import React from 'react';
import Book from './Book';

export default function BooksList(props) {
  const booksList = props.booksData.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      description={book.description}
    />
  ));

  return <div>{booksList}</div>;
}
