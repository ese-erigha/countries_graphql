import React from 'react';

const Navbar = () => {
  return (
    <header className="container p-l-80 p-r-80 fixed-navbar gray-box-shadow">
      <div className="columns col-gapless">
        <div className="column col-6 col-xs-8">
          <div className="black bold">Where in the world?</div>
        </div>
        <div className="column col-6 col-xs-4">
          <div className="float-right">Dark Mode</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
