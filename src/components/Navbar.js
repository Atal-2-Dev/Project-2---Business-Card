import React from 'react';
import logo from '../images/logo192.png'
import '../index.css';

export default function Navbar(){
    return(
        <nav>
            <img src={logo} alt="React Logo" className='nav--icon'/>
            <h3 className='nav--iconname'>ReactFacts</h3>
            <h4 className='nav--title'>React Course - Project 1</h4>
        </nav>
    );
}