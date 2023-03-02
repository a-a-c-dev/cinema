import React  from "react";
import {InfoTextContainer} from './InfoTextContainer';
import {InfoMovieTitle} from './InfoMovieTitle';


export const InfoContent = ({movie})=>{
  
    const {title, year, director, runtime, genre,  actors,country, boxoffice,plot} = movie;
    return (
        <div className="info-modal-content">
          <InfoMovieTitle title={title}/>
          <InfoTextContainer className="form-group plot" label="Summary:"text={plot}/>
          <InfoTextContainer className="form-group" label="Director:" text={director}/>
          <InfoTextContainer className="form-group" label="Runtime:" text={runtime}/>
          <InfoTextContainer className="form-group" label="Genre:" text={genre}/>
          <InfoTextContainer className="form-group" label="Year:" text={year}/>
          <InfoTextContainer className="form-group" label="Country:" text={country}/>
          <InfoTextContainer className="form-group" label="Profit:" text={boxoffice}/>
          <InfoTextContainer className="form-group" label="Actors:" text={actors}/>
        </div>  
    )
}