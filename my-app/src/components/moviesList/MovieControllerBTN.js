import React from "react";

export const MovieControllerBTN = ({btnFunction,movie,IconClassName}) => {
  return (
    <>
        <button
        className="btn"
        type="button"
        onClick={() => btnFunction(movie)}
        >
           <i className={IconClassName}/>{" "}
        </button>
    </>
  );
};