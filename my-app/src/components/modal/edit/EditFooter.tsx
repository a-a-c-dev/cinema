import React from "react";
import {EditBTN} from './EditBTN';
import {CloseFooterModalBtn} from '../../common/CloseFooterModalBtn';

interface EditFooterProps{
  handleClose:()=>void,
  imdbid:string
}

export const EditFooter = ({handleClose, imdbid}:EditFooterProps) => {
  return (
    <div className="modal-footer">
        <CloseFooterModalBtn 
            handleClose={handleClose}
            text="Cancel"
        />
        <EditBTN
            imdbid={imdbid}
        />
    </div>
  );
};
