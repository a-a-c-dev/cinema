import React from "react";


export const DeleteBTN = ({choosenMovieID}) => {
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
