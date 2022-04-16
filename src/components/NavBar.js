import React from 'react';
import {NavLink} from 'react-router-dom';


function NavBar({content}) {
  return (
<div class= "NavBar">
  <div className="loginBtn">
    <button type="button"  className="btn btn-light">Log In</button>
  </div>
 
  <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li><NavLink to="/" ><p class ="menu__item">Home</p></NavLink></li>
        <li><a class="menu__item" href="#">About Us</a></li>
        <li><a class="menu__item" href="#">Log In</a></li>
        <li><a class="menu__item" href="#">Sign Up</a></li>
      </ul>
  </div>
 
</div>
  );
}

export default NavBar;