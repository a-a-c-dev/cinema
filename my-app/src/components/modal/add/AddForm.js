import React,{useState,useCallback} from "react";
import {AddBody} from './AddBody';


import {AddFooter} from './AddFooter';

export const AddForm =({ 
    handleClose,
    handleAdd
}) => {

    const [errors, setErrors] = useState({});
    const [movie, setMovie] = useState({
      title: "",
      year: " "
    });
    const fieldIsValid = useCallback( () => {
      const errors = {};
      const { title, year } = movie;
      const yearPattern = /^(19|20)\d{2}$/;
      const textPattern = /^[a-zA-Z0-9 .!?"-]+$/
      if (!title) errors.titleRequired = "*Title is required";
      if (!title.match(textPattern)) errors.validTitle = "* Title is not valid, please insert title in English";
      if (!year) errors.yearRequired = "* Year is required";
      if (!year.match(yearPattern)) errors.validYear = "* Valid year is required";
      if(!errors.length)setErrors(()=>errors);

      return (Object.keys(errors).length === 0) 
    },[movie])
    const debounce = fn => {
      let timerId;
      return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), 200);
      }
    };
    const handleChange = (name, value) => {
      setMovie(prevMovie => ({
        ...prevMovie,
        [name]: value
      }));
    };
    
    const optimizedhandle = useCallback(debounce(handleChange),[]);
    
    const handleSubmit = event =>{
      event.preventDefault();
      if(!fieldIsValid()) return
      handleAdd(event, movie);
    }
  return (      
    <form onSubmit={handleSubmit} >
        <AddBody errors={errors} handleChange={optimizedhandle}/>
        <AddFooter
                handleClose={handleClose}
              
            />
    </form>
  );
};