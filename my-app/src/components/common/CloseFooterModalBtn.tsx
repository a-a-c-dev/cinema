import React from "react";

interface CloseFooterModalBtnProps{
  handleClose:()=>void,
  text:string
}

export const CloseFooterModalBtn =({handleClose,text}:CloseFooterModalBtnProps) => {
  return (
    <button 
        type="button" 
        className="btn close-modal" 
        onClick={handleClose}>
        {text}
    </button>
  );
};