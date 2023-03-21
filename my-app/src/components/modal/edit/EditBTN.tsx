import React from "react";


export const EditBTN = ({imdbid}:{imdbid:string}) => {
  return (
    <button
        type="submit"
        className="btn"
        data-movieid={imdbid}
        >
        Update
    </button>
  );
};
