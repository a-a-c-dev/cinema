import React from "react";

const DeleteConfirmationModal = ({
  handleClose,
  title,
  onDelete,
  choosenMovie
}) => {
  console.log(choosenMovie.imdbid)
  return (
    <div>
      <form onSubmit={onDelete} data-movieid={choosenMovie.imdbid}>
        <div className="modal-header">
          <h1>{title} </h1>
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
          <p>Are you sure, you`ll like to delete the movie {choosenMovie.title}?</p>
        </div>
        <div className="delete-modal-footer">
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
