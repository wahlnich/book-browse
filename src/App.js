import React, { useState } from 'react';
import './App.css';

import Header from './components/navigation/Header';
import Body from './components/UI/Body';
import Modal from './components/modal/Modal';
import BooksList from './components/book/BooksList';

function App() {
  // using fake data until i add API integration
  // using fake ISBNs
  const dummyData = [
    {
      title: 'Priory of the Orange Tree',
      author: 'Samantha Shannon',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Viverra nam libero justo laoreet sit amet cursus sit. Lectus vestibulum mattis ullamcorper velit. Id volutpat lacus laoreet non curabitur gravida. Imperdiet dui accumsan sit amet nulla facilisi. Tristique senectus et netus et malesuada fames ac. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Risus pretium quam vulputate dignissim. Pharetra pharetra massa massa ultricies mi quis hendrerit. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Euismod lacinia at quis risus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
      isbn: '978-1635570298',
    },
    {
      title: 'Stormlight Archive',
      author: 'Brandon Sanderson',
      description: `These glowy dudes with depression, man. They're flying, they're lashing, they're creating diagrams. In the name of Honor, of course.`,
      isbn: '978-0-7653-2635-5',
    },
    {
      title: 'The Cloud Roads',
      author: 'Martha Wells',
      description: `Awesome flying shapeshifting monster/human hybrids. Reverse gender roles brah!`,
      isbn: '978-1949102185',
    },
    {
      title: 'Wheel of Time',
      author: 'Robert Jordan',
      description: 'wheel of time',
      isbn: '9780312850098',
    },
    {
      title: 'Underlord',
      author: 'Will Wight',
      description:
        'A tournament approaches. All around the world, great clans and sects prepare their disciples to fight against one another in a competition of young Underlords. Even the Blackflame Empire is drawn in, but their youth are not strong enough to compete. \\nYet.',
      isbn: '9780999851128',
    },
    {
      title: 'Soulsmith',
      author: 'Will Wight',
      description: `Outside Sacred Valley, ancient ruins rise from the earth, drawing sacred artists from miles around to fight for the treasures within.

      Lindon has reached Copper, taking the first step on the road to power, but the warriors of the outside world are still far beyond him.
      
      To advance, he turns to the arcane skills of the Soulsmiths, who craft weapons from the stuff of souls. With new powers come new enemies, and Lindon soon finds himself facing an entire sect of Golds.`,
      isbn: '9780989671774',
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

  // set current book
  let [currentBookISBN, setCurrentBook] = useState('');

  const onSetCurrentBook = (book) => {
    setCurrentBook(book);
  };

  // find the correct book in the dummy array
  const bookISBNFinder = (isbn) => {
    return dummyData.findIndex((book) => book.isbn === isbn);
  };

  return (
    <div className='full-site-container'>
      <Header />
      <Body>
        {
          // Show modal only when modal is true
          // pass dummydata to render the modal.
          // pass closeModal so it can close itself
          displayModal && <Modal dummyData={dummyData[bookISBNFinder(currentBookISBN)]} onCloseModal={closeModal} />
        }
        {/*Render book. Pass showModal so it shows it when modal is clicked on.
         Pass data for rendering*/}
        {/*<Book onShowModal={showModal} dummyData={dummyData[0]} />*/}
        <BooksList onShowModal={showModal} booksData={dummyData} onSetCurrentBook={onSetCurrentBook} />
      </Body>
    </div>
  );
}

export default App;
