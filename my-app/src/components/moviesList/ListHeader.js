import React from "react";
import cinemaIcon from '../../assets/img/cinema-icon.svg'

export const ListHeader = ({ openAddMovieModal }) => {
  return (
    <nav className="navbar  ">
      <span className="navbar-brand"> <img src={cinemaIcon} alt="cinema icon"></img></span>
      <div>
        <button className="navbar-btn" onClick={openAddMovieModal}>
          {" "}
          <p className="add-movie-text">
            add a movie
          </p>
          <i className="fa fa-plus" />{" "}
        </button>
      </div>
    </nav>
  );
};
