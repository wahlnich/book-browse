import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

import Button from '../UI/Button';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onToggleModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <Button onToggleModal={props.onToggleModal} />
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
        <Backdrop onToggleModal={props.onToggleModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          data={props.dummyData}
          onToggleModal={props.onToggleModal}
        />,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
