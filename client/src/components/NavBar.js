import React from 'react';
import {NavLink} from 'react-router-dom';
import AuthButton from './AuthButton';

function NavBar({content}) {
  return (
<div class= "NavBar">

<div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li><NavLink to="/" ><a class ="no_underline menu__item">Home</a></NavLink></li>
        <li><NavLink to="/upload" ><a class ="menu__item">Upload</a></NavLink></li>
        <li><NavLink to="/login" ><a class ="menu__item">Log In</a></NavLink></li>
        <li><NavLink to="/register" ><a class ="menu__item">Sign Up</a></NavLink></li>
        <li><NavLink to="/about" ><a class ="menu__item">About Us</a></NavLink></li>
      </ul>
    </div>
 

  <div className="loginBtn">
   <AuthButton/>
   
  </div>
 
 
</div>
  );
}

export default NavBar;