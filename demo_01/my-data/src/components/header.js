import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>HOME</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
