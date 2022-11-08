import React from "react";


export const DeleteModalBody =React.memo(({title}) => {
  return (
    <div className="modal-body delete">
          <p>Are you sure, you would like to delete the movie {title}?</p>
    </div>
  );
});