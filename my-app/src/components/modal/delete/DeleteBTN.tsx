import React from "react";


export const DeleteBTN = ({choosenMovieID}:{choosenMovieID:string}) => {
  return (
    <button
        type="submit"
        className="btn"
        data-movieid={choosenMovieID}
    >
      Submit
    </button>
  );
};
