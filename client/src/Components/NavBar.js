import React from 'react';

import AuthNav from './auth0/AuthNav';

// NOTE TO SELF adding compartmentalized nav elements to main nav bar will make it easier to manage code

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;