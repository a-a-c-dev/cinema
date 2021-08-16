import React from 'react';

export const MovieInfo = ({
    title,
    year,
    id,
    director,
    runtime,
    genre
    }) => {
    return(
        <div className="info-container">
        <span>
          <span>Title:</span>
          {title}
        </span>
        <span>
          <span>ID:</span>
          {id}
        </span>
        <span>
          <span>Director:</span>
          {director}
        </span>
        <span>
          <span>Year:</span>
          {year}
        </span>
        <span>
          <span>Runtime:</span>
          {runtime}
        </span>
        <span>
        <span>Genre:</span>
          {genre}
        </span>
      </div>
    )
}