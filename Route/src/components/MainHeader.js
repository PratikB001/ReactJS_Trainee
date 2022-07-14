import React from "react";
import { NavLink } from "react-router-dom";
import classes from './MainHeader.Module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to='/welcome'> Welcome</NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to='/product'> Product</NavLink>
        </li>
      </ul>
    </nav>
    </header>
    
  );
};

export default MainHeader;