import React from 'react';
import classes from './ModalExitButton.module.css';

export default function ModalExitButton(props) {
  return (
    <button className={classes['close-button']} onClick={props.onToggleModal}>
      {props.label}
    </button>
  );
}
