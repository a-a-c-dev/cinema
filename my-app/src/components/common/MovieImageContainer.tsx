import React from 'react';
import defaultPoster from "../../assets/img/unavailable-poster.png";


export const MovieImageContainer = React.memo(({poster}:{poster?:string}) => {
      return(
        <div className="image-container">
            <img src={poster==="N/A"?defaultPoster:poster} alt="Movie Poster"/>
        </div>
      )
  }
)