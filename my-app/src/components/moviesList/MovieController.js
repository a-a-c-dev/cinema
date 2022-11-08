import React from 'react';
import {MovieControllerBTN} from './MovieControllerBTN'


export const MovieController = ({handleEdit,handleInfo,handleDelete, movie}) => {
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
