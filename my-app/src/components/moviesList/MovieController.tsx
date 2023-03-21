import React from 'react';
import {MovieControllerBTN} from './MovieControllerBTN'
import {Movie} from '../../App'

interface MovieControllerProps{
  movie :Movie, 
  handleEdit:(movie:Movie)=>void,
  handleInfo:(movie:Movie)=>void, 
  handleDelete:(movie:Movie)=>void
}


export const MovieController = ({handleEdit,handleInfo,handleDelete, movie}:MovieControllerProps) => {
  return(
    <div className="btn-container"> 
        <MovieControllerBTN
          btnFunction={handleEdit}
          movie={movie}
          IconClassName="fa fa-ellipsis-v"
        />
        <MovieControllerBTN
          btnFunction={handleInfo}
          movie={movie}
          IconClassName="fa fas fa-eye"
        />
        <MovieControllerBTN
          btnFunction={handleDelete}
          movie={movie}
          IconClassName="fa fa-trash"
        />
    </div>  
  )
}
