// NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const user = useSelector(state => state.user);

  return (
    <div style={{ height: "50px", backgroundColor: "gray", paddingTop: "18px", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {user ? (
          <>
            <Link to="/dashboard"><strong>Dashboard</strong></Link>
            <Link to="/"><strong>Logout</strong></Link>
          </>
        ) : (
          <>
            <Link to="/signup"><strong>Sign Up</strong></Link>
            <Link to="/"><strong>Login</strong></Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
