import React from 'react';
import classes from './Header.module.css';

export default function Header(props) {
  return (
    <div className={classes.header}>
      <ul className={classes.links}>
        <li>Home</li>
        <li>Browse</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}
