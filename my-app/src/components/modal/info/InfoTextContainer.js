import React from "react";


export const InfoTextContainer = ({className, label, text}) => {
  return (
    <span  className={className}>
        <span className="form-group-label">{label}</span> {text}
    </span>
  );
};
