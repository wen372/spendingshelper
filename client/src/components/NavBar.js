import React from 'react';
import {NavLink} from 'react-router-dom';
import AuthButton from './AuthButton';

function NavBar({content}) {
  return (
<div class= "NavBar">

<div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li><NavLink to="/" ><a class ="no_underline menu__item">Home</a></NavLink></li>
        <li><NavLink to="/upload" ><a class ="menu__item">Upload</a></NavLink></li>
        <li><NavLink to="/about" ><a class ="menu__item">About Us</a></NavLink></li>
      </ul>
    </div>
 

  
   <AuthButton/>
  

 
 
</div>
  );
}

export default NavBar;