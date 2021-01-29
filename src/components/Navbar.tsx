import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <header className="container p-l-80 p-r-80 fixed-navbar gray-box-shadow">
    <div className="columns col-gapless">
      <div className="column col-6 col-xs-8">
        <div className="black font-20 bold">Where in the world?</div>
      </div>
      <div className="column col-6 col-xs-4">
        <div className="float-right">
          <FontAwesomeIcon icon={faMoon} />
          <span className="m-l-5 font-weight-550">Dark Mode</span>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
