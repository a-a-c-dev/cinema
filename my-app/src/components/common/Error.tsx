import React from "react";


export const Error = ({error}:{error:string}) => {
  return (
            <div className="validation-alert">{error}</div>
      );
};