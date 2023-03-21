import React from "react";
import {ModalHeader} from "../../common/ModalHeader";
import {CloseFooterModalBtn} from '../../common/CloseFooterModalBtn';
import {MovieImageContainer} from '../../common/MovieImageContainer';
import {InfoContent} from './InfoContent';

interface InformationModalProps{
  handleClose:()=>void
  movie:Movie
}
interface Movie{
  title:string, 
  year:string, 
  director:string, 
  runtime:string, 
  genre:string,  
  actors:string,
  country:string, 
  boxoffice:string,
  plot:string,
  poster:string
}


const InformationModal = ({handleClose, movie}:InformationModalProps) => {
return (
  <div className="modal-content">
    <ModalHeader title="movie Information" handleClose={handleClose} />
    <div className="modal-body info">
        <MovieImageContainer poster={movie.poster}/>
        <InfoContent movie={movie}/>
    </div>
    <div className="modal-footer">
          <CloseFooterModalBtn handleClose={handleClose} text="Close"/>
    </div>
  </div>

  )  
};

export default InformationModal;
