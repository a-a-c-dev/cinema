import React from "react";
import CarouselSlider from "./CarouselSlider";
import {ListHeader} from "./ListHeader";

const ListContainer = ({ movies =[], openAddMovieModal, handleEdit,handleInfo, handleDelete }) => {
  return (
     <>
        <ListHeader openAddMovieModal={openAddMovieModal} />
        <CarouselSlider
                movies={movies}
                handleInfo={handleInfo}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
        />
     </>
  );
};

export default ListContainer;


