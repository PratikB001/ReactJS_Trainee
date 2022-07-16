import React from "react";
import "./css/navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <Router>
        <div className='navbar'>
          <Link className='item' to='/'>
            Weather
          </Link>
          <Link className='item' to='/profile'>
            About Us
          </Link>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default Navbar;
