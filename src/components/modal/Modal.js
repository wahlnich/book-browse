import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>Test</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  const dummyData = {
    title: 'Priory of the Orange Tree',
    author: 'Samantha Shannon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Viverra nam libero justo laoreet sit amet cursus sit. Lectus vestibulum mattis ullamcorper velit. Id volutpat lacus laoreet non curabitur gravida. Imperdiet dui accumsan sit amet nulla facilisi. Tristique senectus et netus et malesuada fames ac. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Risus pretium quam vulputate dignissim. Pharetra pharetra massa massa ultricies mi quis hendrerit. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Euismod lacinia at quis risus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
