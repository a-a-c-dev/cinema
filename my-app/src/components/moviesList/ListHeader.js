import React from "react";
import cinemaIcon from '../../assets/img/cinema-icon.svg'

export const ListHeader = ({ openAddMovieModal }) => {
  return (
    <nav className="navbar">
      <div className="icon-container"> <img src={cinemaIcon} alt="cinema icon"></img></div>
      <div>
        <button className="navbar-btn" onClick={openAddMovieModal}>
          {" "}
          <h3 className="add-movie-text">
             to add
          </h3>
          <i className="fa fa-arrow-circle-up" />{" "}
        </button>
      </div>
    </nav>
  );
};
