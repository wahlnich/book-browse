import React from 'react';

export default function BookSearch() {
  return (
    <form>
      <label htmlFor="title">Book Title:</label>
      <input type="text" id="title" name="title" />
      <button type="submit">Search</button>
    </form>
  );
}
