import React from "react";
import {Movie} from '../../App'



interface MovieControllerBTNProps{
  btnFunction:(movie:Movie)=>void,
  movie:Movie,
  IconClassName:string
}





export const MovieControllerBTN = ({btnFunction,movie,IconClassName}:MovieControllerBTNProps) => {
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