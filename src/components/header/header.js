import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import "./login/login.js"
import "./signup/signup.js"
const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />

      <div className="box">
        <div className="header-left">
          <div className="location-icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className="location-name">Delhi NCR</div>
          <div>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>

        <div className="seperator"> </div>

        <div className="header-right">
          <div className="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="search-name">
            Search for restaurant, cuisine or a dish
          </div>
        </div>
      </div>
      <div className="last">
        <div className="login">
        login<a href="login.js"></a>
        </div>
        <div className="signup">
         signup<a href="signup.js"></a>
        </div>
      </div>
    </div>
  );
}

export default Header