import React from "react";
import cinema_img  from '../assets/img/cinema_img.png';

const Header = () => {
  return (
    <div className="app-header">
      <h1>A.A.C<br/> Cinema</h1>
      <img src={cinema_img} alt="background"/>
    </div>
  );
};

export default Header;
