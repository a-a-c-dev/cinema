import React from "react";
import CarouselSlider from "./CarouselSlider";
import {ListHeader} from "./ListHeader";
import {Movie} from '../../App'

interface ListContainerProps{
   movies :Movie[], 
   openAddMovieModal:()=>void, 
   handleEdit:(movie:Movie)=>void,
   handleInfo:(movie:Movie)=>void, 
   handleDelete:(movie:Movie)=>void
 }


const ListContainer = ({ movies =[], openAddMovieModal, handleEdit,handleInfo, handleDelete }:ListContainerProps) => {
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


