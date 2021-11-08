import React from "react";
import cinema_img  from '../assets/img/cinema_img.jpg';

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-txt-container">
        <h1>A.A.C cinema</h1>
        <h2>Personal movies Library</h2>
      </div>
      <img src={cinema_img} alt="cinema-background-image"/>
    </header>
  );
};

export default Header;
