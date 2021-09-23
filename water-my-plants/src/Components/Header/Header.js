import React from 'react'
import {Link } from "react-router-dom";
import './Header.css'


function Header () {

    return (
      <div className="navbar"> 
        
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/login"> Log In </Link>
            <Link to="/signup"> Sign Up </Link>
        </nav>
      </div>
    )
}

export default Header