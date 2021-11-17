import React, {useState} from 'react';
import './App.css';

import Modal from './components/modal/Modal';
import Book from './components/book/Book';

function App() {
  const dummyData = [
    {
      title: 'Priory of the Orange Tree',
      author: 'Samantha Shannon',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Viverra nam libero justo laoreet sit amet cursus sit. Lectus vestibulum mattis ullamcorper velit. Id volutpat lacus laoreet non curabitur gravida. Imperdiet dui accumsan sit amet nulla facilisi. Tristique senectus et netus et malesuada fames ac. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Risus pretium quam vulputate dignissim. Pharetra pharetra massa massa ultricies mi quis hendrerit. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Euismod lacinia at quis risus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
    },
  ];

  let [displayModal, setDisplayModal] = useState(false);

  const showModal = () => {
    setDisplayModal(true);
    console.log(displayModal);
  };

  // closing depends on the previous state
  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <div className="bg-image">
      {displayModal && (
        <Modal dummyData={dummyData[0]} onCloseModal={closeModal} />
      )}
      <Book
        onShowModal={showModal}
        onCloseModal={closeModal}
        dummyData={dummyData[0]}
        displayModal={displayModal}
      />
    </div>
  );
}

export default App;
