import React from "react";


export const InfoMovieTitle = React.memo(({title}) => {
  return (
      <h3 className="info-modal-title">
          {title}
      </h3>
  );
});
