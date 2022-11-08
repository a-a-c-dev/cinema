import React from 'react';

import { AddSubmitBTN } from "./AddSubmitBTN";
import {CloseFooterModalBtn} from '../../common/CloseFooterModalBtn';

 export const AddFooter = ({  handleClose }) =>{
    return (
        <div className="modal-footer">
            <CloseFooterModalBtn  
                handleClose={handleClose}
                text="Close"
            />
            <AddSubmitBTN />
        </div>
    )
}