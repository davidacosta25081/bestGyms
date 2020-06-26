import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Nav = () => {
  
  const navStyle = {
    color: 'white'
  };
  
  
  
  return (
    <nav> 
      <h1>GYM &nbsp;  RAT-E</h1>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
        <li><h2>HOME</h2></li>
        </Link>
        
      </ul> 
      </nav>

  	);
}

export default Nav;