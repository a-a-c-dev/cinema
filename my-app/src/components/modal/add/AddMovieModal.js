import React from "react";
import {AddForm} from './AddForm';
import {ModalHeader} from "../../common/ModalHeader";

const AddMovieMModal = ({
  handleClose,
  handleAdd,
}) => {


  return (
    <div  className="modal-content"> 
      <ModalHeader title="Add Movie" handleClose={handleClose} />
      <AddForm  handleClose={handleClose} handleAdd={handleAdd}/>
    </div>
  );
};

export default AddMovieMModal;
