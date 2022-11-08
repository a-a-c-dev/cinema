import React from "react";
import { ModalHeader } from "../../common/ModalHeader";
import  {DeleteModalBody} from './DeleteModalBody'
import  {DeleteBTN} from './DeleteBTN'
import {CloseFooterModalBtn} from '../../common/CloseFooterModalBtn';

const DeleteConfirmationModal = ({
  handleClose,
  title,
  onDelete,
  choosenMovie
}) => {
  return (
    <div  className="modal-content">
      <form onSubmit={onDelete} data-movieid={choosenMovie.imdbid}>
        <ModalHeader title={title}  handleClose={handleClose}/>
        <DeleteModalBody title={choosenMovie.title}/>
        <div className="modal-footer">
          {" "}
          <CloseFooterModalBtn
              handleClose={handleClose}
              text="Cancel"
          />
          <DeleteBTN
            choosenMovieID={choosenMovie.imdbid}
            />
        </div>
      </form>
    </div>
  );
};

export default DeleteConfirmationModal;
