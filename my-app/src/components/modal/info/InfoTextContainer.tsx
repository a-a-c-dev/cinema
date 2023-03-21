import React from "react";

interface InfoTextContainerProps{
  className:string, 
  label:string, 
  text:string
}

export const InfoTextContainer = ({className, label, text}:InfoTextContainerProps) => {
  return (
    <span  className={className}>
        <span className="form-group-label">{label}</span> {text}
    </span>
  );
};
