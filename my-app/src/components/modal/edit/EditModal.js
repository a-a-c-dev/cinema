import React, {useCallback, useState} from "react";
import {Spinner} from "../../common/Spinner";
import {ModalHeader} from "../../common/ModalHeader";
import {EditBody} from './EditBody';
import {EditFooter} from './EditFooter';



const EditModal = ({handleClose, movie, handleUpdate }) => {
  const { imdbid, poster} = movie;
  const [updatedMovie, setUpdatedMovie] = useState({
    title: "",
    year: "",
    director:"",
    genre:"",
    runtime:"",
  });
  const handleChange = useCallback ( event => {
    const { name, value } = event.target;
    event.preventDefault();
    setUpdatedMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }));
  },[]);
 
return movie.length === 0 ? (
    <Spinner />
  ) : (
      <>
        <div className="modal-content">
          <form className="modal-form edit" data-movieid={imdbid} data-poster={poster} onSubmit={event=>handleUpdate(event, updatedMovie)}>
            <ModalHeader title="Edit movie infomation" handleClose={handleClose}/>
            <EditBody handleChange={handleChange} movie={movie} />
            <EditFooter handleClose={handleClose} imdbid={imdbid}/>
          </form>
        </div>
      </>
    );
};

export default EditModal;
