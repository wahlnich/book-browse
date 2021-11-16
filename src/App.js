import React, {useState} from 'react';
import './App.css';

import Modal from './components/modal/Modal';
import Book from './components/book/Book';

function App() {
  let [displayModal, setDisplayModal] = useState(true);

  return (
    <div className="bg-image">
      {displayModal && <Modal />}
      <Book name="Priory of the Orange Tree" author="Samantha Shannon" />
    </div>
  );
}

export default App;
