import React from "react";

interface ModalHeaderProps{
  title:string,
  handleClose:()=>void
}

export const ModalHeader =({title,handleClose}:ModalHeaderProps) => {
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
