import React from "react";

const Header =React.memo(() => {
  return (
    <header className="app-header">
        <div className="app-header-txt-container">
          <h1>A.A.C cinema</h1>
          <h2>Personal movies Library</h2>
        </div>
    </header>
  );
});

export default Header;
