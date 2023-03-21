import React from "react";
import cinemaIcon from '../../assets/img/cinema-icon.svg'
import {ListControllerBTN} from './ListControllerBTN'

export const ListHeader = React.memo(({ openAddMovieModal }:{openAddMovieModal:()=>void}) => {
  return (
    <nav className="navbar">
      <div className="icon-container"> <img src={cinemaIcon} alt="cinema icon"></img></div>
      <ListControllerBTN openAddMovieModal={openAddMovieModal}/>  
    </nav>
  );
});
