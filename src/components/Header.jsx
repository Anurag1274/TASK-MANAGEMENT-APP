import React from 'react';
import './Header.css';

const Header = ({ openModal }) => {
  return (
    <div className='Header-Container'>
      <h1>Task Management App</h1>
      <button onClick={openModal}>Add Task</button>
    </div>
  );
};

export default Header;
