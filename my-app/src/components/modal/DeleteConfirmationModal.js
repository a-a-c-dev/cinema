import React from "react";

const DeleteConfirmationModal = ({
  handleClose,
  title,
  onDelete,
  choosenMovie
}) => {
  return (
    <div  className="modal-content">
      <form onSubmit={onDelete} data-movieid={choosenMovie.imdbid}>
        <div className="modal-header">
          <h2>{title} </h2>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body delete">
          <p>Are you sure, you`ll like to delete the movie {choosenMovie.title}?</p>
        </div>
        <div className="modal-footer">
          {" "}
          <button
            type="button"
            className="btn"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            type="submit"
            className="btn "
            data-movieid={choosenMovie.imdbid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteConfirmationModal;
