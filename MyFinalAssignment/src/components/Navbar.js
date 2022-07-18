import React from "react";
import "./css/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
    <div className='navbar'>
      <NavLink className='item' to='/'>
        Weather
      </NavLink>
      <NavLink className='item' to='/about'>
        About Us
      </NavLink>
    </div>
    </React.Fragment>
  );
};

export default Navbar;
