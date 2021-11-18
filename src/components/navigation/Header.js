import React from 'react';
import classes from './Header.module.css';

export default function Header(props) {
  return (
    <div className={classes.header}>
      <div className={classes.links}>
        <h1>Home</h1>
        <h1>Browse</h1>
        <h1>Profile</h1>
      </div>
    </div>
  );
}
