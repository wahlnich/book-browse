import React, {useState, useContext} from 'react';
import './App.css';

import Header from './components/navigation/Header';
import Body from './components/UI/Body';
import Modal from './components/modal/Modal';
import BooksList from './components/book/BooksList';
import AppContext from './store/app-context';

function App() {
  const ctx = useContext(AppContext);

  // Decide when to show the modal
  let [displayModal, setDisplayModal] = useState(false);

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  // set current book
  let [currentBookISBN, setCurrentBook] = useState('');

  const onSetCurrentBook = (book) => {
    setCurrentBook(book);
  };

  // find the correct book in the dummy array
  const bookISBNFinder = (isbn) => {
    return ctx.data.findIndex((book) => book.isbn === isbn);
  };

  return (
    <div className="full-site-container">
      <AppContext.Provider>
        <Header />
        <Body>
          {
            // Show modal only when modal is true
            // pass dummydata to render the modal.
            // pass closeModal so it can close itself
            displayModal && (
              <Modal
                dummyData={ctx.data[bookISBNFinder(currentBookISBN)]}
                onToggleModal={toggleModal}
              />
            )
          }
          {/*Render book. Pass showModal so it shows it when modal is clicked on.
         Pass data for rendering*/}
          {/*<Book onShowModal={showModal} dummyData={dummyData[0]} />*/}
          <BooksList
            onToggleModal={toggleModal}
            booksData={ctx.data}
            onSetCurrentBook={onSetCurrentBook}
          />
        </Body>
      </AppContext.Provider>
    </div>
  );
}

export default App;
