import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div style={{ width: '100px', display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/">Home</Link>
      <Link to="/show">Show</Link>
    </div>
  );
};

export default Nav;
