import React from "react";
import {EditBTN} from './EditBTN';
import {CloseFooterModalBtn} from '../../common/CloseFooterModalBtn';


export const EditFooter = ({handleClose, imdbid}) => {
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
