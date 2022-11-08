import React from "react";

export const ModalHeader =({title,handleClose}) => {
  return (
         <div className="modal-header">
          <h2>{title} </h2>
            <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={handleClose}
             >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
  );
};
