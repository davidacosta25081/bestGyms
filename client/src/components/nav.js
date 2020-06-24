import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Nav = () => {
  
  const navStyle = {
    color: 'white'
  };
  
  
  
  return (
    <nav> 
      <h3>bestGyms!!</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
        <li><h4>Gyms</h4></li>
        </Link>
        <Link style={navStyle} to="/Gyms/:slug"> 
        <li><h4>Gym</h4></li>
        </Link>
      </ul> 
      </nav>

  	);
}

export default Nav;