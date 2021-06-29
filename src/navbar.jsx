import React from 'react'
import './navbar.css';

function navbar() {
   
    return (
       
            <header>
                 <nav className='navbar'>
                     <h1>Travel Website</h1>
                     <input type="checkbox" id="click"/>
                    <label htmlFor="click">
                    <i id="iconid">Hamburger</i>
                    </label>
                     <ul className='navbarList'>
                         <li><a href="">Home</a></li>
                         <li><a href="">Services</a></li>
                         <li><a href="">About Us</a></li>
                         <li><a href="">Contact Us</a></li>
                         
                     </ul>
                     

                 </nav>

            </header>
          
        
    )
}

export default navbar;
