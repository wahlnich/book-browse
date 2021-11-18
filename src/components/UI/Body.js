import classes from './Body.module.css';

import React from 'react';

export default function Body(props) {
  return <div className={classes.content}>{props.children}</div>;
}
