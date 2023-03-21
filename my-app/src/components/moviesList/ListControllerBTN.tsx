import React from "react";


export const ListControllerBTN = ({ openAddMovieModal }:{openAddMovieModal:()=>void}) => {
  return (
    <button className="navbar-btn" onClick={openAddMovieModal}>
        {" "}
            to add
        <i className="fa fa-arrow-circle-up" />{" "}
     </button>

  );
};
