import React from "react";
import {ModalHeader} from "../../common/ModalHeader";
import {CloseFooterModalBtn} from '../../common/CloseFooterModalBtn';
import {MovieImageContainer} from '../../common/MovieImageContainer';
import {InfoContent} from './InfoContent';


const InformationModal = ({handleClose, movie}) => {
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
