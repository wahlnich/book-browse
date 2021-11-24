import React from 'react';
import classes from './Button.module.css';

export default function Button(props) {
  return (
    <button className={classes['close-button']} onClick={props.onToggleModal}>
      Close
    </button>
  );
}
