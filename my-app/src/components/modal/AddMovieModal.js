import React, { useState } from "react";


const AddMovieMModal = ({
  handleClose,
  handleAdd,
}) => {

  const [disabled, setDisable] = useState(true);
  const [errors, setErrors] = useState({});
  const [movie, setMovie] = useState({
    title: " ",
    year: " "
  });
  const fieldIsValid = () => {
    const errors = {};
    const { title, year } = movie;
    const yearPattern = /^(19|20)\d{1}$/;
    const textPattern = /^[a-zA-Z0-9 .!?"-]+$/
    if (!title) errors.title = "Title is required";
    if (!title.match(textPattern)) errors.validYear = "Title is not valid, please insert title in English";
    if (!year) errors.yearRequired = "Year is required";
    if (!year.match(yearPattern)) errors.validYear = "Valid year is required";
    setErrors(errors);
    (Object.keys(errors).length === 0) ? setDisable(false) : setDisable(true);
  };
  const handleChange = event => {
    const { name, value } = event.target;
    event.preventDefault();
    fieldIsValid();
    setMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }));
  };

  return (
    <div  className="modal-content">
      <form onSubmit={event => handleAdd(event, movie)} >
          <div className="modal-header">
            <h2>Add Movie</h2>
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
              <div className="form-group">
                <label>Title</label>
                <input
                  className="form-control input-group-lg"
                  name="title"
                  onChange={
                    handleChange
                  }
                  placeholder="Movie Title"
                />
                {errors.title && (
                  <div className="alert alert-danger">{errors.title}</div>
                )}
              </div>
              <div className="form-group">
                <label>Year</label>
                <input
                  type="text"
                  className="form-control input-group-lg"
                  name="year"
                  onChange={
                    handleChange
                  }
                  placeholder="Movie Year"
                />
                {errors.yearRequired ||
                  (errors.validYear && (
                    <div className="alert alert-danger">
                      {errors.yearRequired || errors.validYear}
                    </div>
                  ))}
              </div>
          </div>
          <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-priamary " disabled={disabled}>
                    Submit
                  </button>
          </div>
        </form>

    </div>
  );
};

export default AddMovieMModal;
