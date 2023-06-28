import React from 'react';

function Header({ leftTxt, centerTxt, rightTxt }) {
  return (
    <header>
      <div className='header_left'>{leftTxt}</div>
      <div className='header_center'>{centerTxt}</div>
      <div className='header_right'>{rightTxt}</div>
    </header>
  );
}

export default Header;
