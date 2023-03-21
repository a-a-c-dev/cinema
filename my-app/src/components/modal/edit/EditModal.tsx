import React, {useCallback, useState} from "react";
import {Spinner} from "../../common/Spinner";
import {ModalHeader} from "../../common/ModalHeader";
import {EditBody} from './EditBody';
import {EditFooter} from './EditFooter';

interface EditModalProps{
  handleClose:()=>void,
  movie:Movie,
  handleUpdate:(event:  React.FormEvent<HTMLFormElement>,updatedMovie:UpdatedMovie )=>void
}
interface Movie {
  imdbid:string,
  poster:string,
  title:string,
  year: string,
  director:string,
  genre:string,
  runtime:string,
}
interface UpdatedMovie{
  title:string,
  year: string,
  director:string,
  genre:string,
  runtime:string,
}

const EditModal = ({handleClose, movie, handleUpdate }:EditModalProps) => {
  const { imdbid, poster} = movie;

  const [updatedMovie, setUpdatedMovie] = useState<UpdatedMovie>({
    title: "",
    year: "",
    director:"",
    genre:"",
    runtime:"",
  });

  const handleChange = useCallback ( (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    event.preventDefault();
    setUpdatedMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }));
  },[]);
 
return Object.keys(movie).length === 0 ? (
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
