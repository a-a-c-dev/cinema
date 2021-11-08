import React from "react";
import defaultPoster from "../../assets/img/unavailable-poster.png";

import {Spinner} from "../../common/Spinner";

const InformationModal = ({handleClose, movie}) => {
  const {title, year, director, runtime, genre, poster} = movie;

return movie.length === 0 ? (
    <Spinner />
  ) : (
      <>
        <div className="modal-content">
          <div className="modal-header">
            <h2>
                    movie information  
              </h2>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body info">
              <div className="info image-container">
                 <img src={poster==="N/A"?defaultPoster:poster} alt="Movie Poster"/>
              </div>
              <div className="info-modal-content">
              <span className="form-group">
                  Title:{title}
              </span>
              <span  className="form-group">
              Director:{director}
              </span>
              <span  className="form-group">
              Genre:{genre}
              </span>
              <span  className="form-group">
              Runtime:{runtime}
              </span>
              <span  className="form-group">
              Year:{year}
              </span>
              </div>  
          </div>
          <div className="modal-footer">
                <button type="button" className="btn " onClick={handleClose}>
                  Close
              </button>
          </div>
      </div>
      </>
    );
};

export default InformationModal;
