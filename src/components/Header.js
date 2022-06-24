// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
  return (
      <div className='header'>
          <h1>Call a Friend</h1>
          <h5>Your friendly contact app</h5>
          <div className='dot'>
              <span>.....................</span>
          </div>
      </div>
  )
}

export default Header;
