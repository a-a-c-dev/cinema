import React, {useState} from "react";
import Spinner from "../../common/Spinner";

const InfoModal = ({handleClose, movie, handleUpdate }) => {
  const {title, year, imdbid, director, runtime, genre, poster} = movie;
  const [updatedMovie, setUpdatedMovie] = useState({
    title: "",
    year: "",
    director:"",
    genre:"",
    runtime:"",
  });
  const handleChange = event => {
    const { name, value } = event.target;
    event.preventDefault();
    setUpdatedMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }));
  };
 
return movie.length === 0 ? (
    <Spinner />
  ) : (
      <>
        <div className="modal-content">
          <div className="modal-header">
            <h3>
              Update movie info
              </h3>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className=" info-form" data-movieid={imdbid} data-poster={poster} onSubmit={event=>handleUpdate(event, updatedMovie)}>

              <span className="form-group">
                  <label>Title:{title}</label>
                <input
                  className="form-control input-group-lg"
                  name="title"
                  onChange={handleChange}
                />
              </span>
              <br />
              <span  className="form-group">
                <label>Director:{director}</label>
                <input
                  className="form-control input-group-lg"
                  name="director"
                  onChange={handleChange}
                />
              </span>
              <span  className="form-group">
                  <label>Genre:{genre}</label>
                <input
                  className="form-control input-group-lg"
                  name="genre"
                  onChange={handleChange}
                />
              </span>
              <br />
              <span  className="form-group">
                  <label>Runtime:{runtime}</label>
                <input
                  className="form-control input-group-lg"
                  name="runtime"
                  onChange={handleChange}
                />
              </span>
              <span  className="form-group">
                  <label>Year:{year}</label>
                <input
                  className="form-control input-group-lg"
                  name="year"
                  onChange={handleChange}
                />
              </span>
              <br />
              <div className="modal-footer">
                <button type="button" className="btn " onClick={handleClose}>
                  Cancel
              </button>
                <button
                  type="submit"
                  className="btn "
                  data-movieid={imdbid}
                >
                  Save
              </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
};

export default InfoModal;
