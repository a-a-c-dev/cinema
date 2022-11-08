import React from "react";
import {HeaderContent} from './HeaderContent'

const Header =React.memo(() => {
  return (
    <header className="app-header">
       <HeaderContent/>
    </header>
  );
});

export default Header;
