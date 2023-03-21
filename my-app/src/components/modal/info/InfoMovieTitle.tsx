import React from "react";


export const InfoMovieTitle = React.memo(({title}:{title:string}) => {
  return (
      <h3 className="info-modal-title">
          {title}
      </h3>
  );
});
