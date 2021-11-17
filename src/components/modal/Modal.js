import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

import Button from '../UI/Button';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <Button onCloseModal={props.onCloseModal} />
      <h1>{props.data.title}</h1>
      <h2>{props.data.author}</h2>
      <p>{props.data.description}</p>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          data={props.dummyData}
          onCloseModal={props.onCloseModal}
        />,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
