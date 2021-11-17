import React, {useState} from 'react';
import './App.css';

import Modal from './components/modal/Modal';
import Book from './components/book/Book';

function App() {
  // using fake data until i add API integration
  const dummyData = [
    {
      title: 'Priory of the Orange Tree',
      author: 'Samantha Shannon',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Viverra nam libero justo laoreet sit amet cursus sit. Lectus vestibulum mattis ullamcorper velit. Id volutpat lacus laoreet non curabitur gravida. Imperdiet dui accumsan sit amet nulla facilisi. Tristique senectus et netus et malesuada fames ac. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Risus pretium quam vulputate dignissim. Pharetra pharetra massa massa ultricies mi quis hendrerit. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Euismod lacinia at quis risus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
    },
  ];

  // Decide when to show the modal
  let [displayModal, setDisplayModal] = useState(false);

  const showModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <div>
      {
        // Show modal only when modal is true
        // pass dummydata to render the modal.
        // pass closeModal so it can close itself
        displayModal && (
          <Modal dummyData={dummyData[0]} onCloseModal={closeModal} />
        )
      }
      {/*Render book. Pass showModal so it shows it when modal is clicked on.
         Pass data for rendering*/}
      <Book onShowModal={showModal} dummyData={dummyData[0]} />
    </div>
  );
}

export default App;
