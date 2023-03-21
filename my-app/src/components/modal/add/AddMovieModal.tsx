import React from "react";
import {AddForm} from './AddForm';
import {ModalHeader} from "../../common/ModalHeader";

interface AddMovieMModalProps{
  handleClose:()=>void,
  handleAdd:()=>void,
}

const AddMovieMModal = ({
  handleClose,
  handleAdd,
}:AddMovieMModalProps) => {


  return (
    <div  className="modal-content"> 
      <ModalHeader title="Add Movie" handleClose={handleClose} />
      <AddForm  handleClose={handleClose} handleAdd={handleAdd}/>
    </div>
  );
};

export default AddMovieMModal;
