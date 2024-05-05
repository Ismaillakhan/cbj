
import React, { Component } from 'react'
import Styles from './header.scss'
const Header = () => {
    return ( <>
      <header className='Header-Section'> 
        <nav>
            <a href="home.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
        <div class="logo">
            <img src="your-logo.png" alt="Your Company Logo"/>
            <h1>Your Company Name</h1>
        </div>
    </header>



    </> );
}
 
export default Header;