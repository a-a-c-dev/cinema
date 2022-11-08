import React from "react";


export const CloseFooterModalBtn =({handleClose,text}) => {
  return (
    <button 
        type="button" 
        className="btn close-modal" 
        onClick={handleClose}>
        {text}
    </button>
  );
};