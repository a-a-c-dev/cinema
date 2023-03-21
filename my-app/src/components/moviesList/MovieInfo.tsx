import React from 'react';
import {MovieTextContainer} from './MovieTextContainer'
import {Movie} from '../../App'

export const MovieInfo = React.memo(({
  title,
  year,
  id,
  director,
  runtime,
  genre
  }:Movie) => {
  return(
      <div className="info-container">
        < MovieTextContainer label="Title:" text={title} />

        < MovieTextContainer label="ID:" text={id} />

        < MovieTextContainer label="Director:" text={director} />

        < MovieTextContainer label="Year:" text={year} />

        < MovieTextContainer label="Runtime:" text={runtime} />
        
        < MovieTextContainer label="Genre:" text={genre} />
    </div>
  )
});