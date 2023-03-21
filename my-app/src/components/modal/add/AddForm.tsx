import React,{useState,useCallback} from "react";
import {AddBody} from './AddBody';


import {AddFooter} from './AddFooter';
interface Errors{  
  titleRequired?:string,
  validTitle?:string,
  yearRequired?:string,
  validYear?:string
}
interface AddFormProps{
  handleClose:()=>void,
  handleAdd:(event:React.FormEvent<HTMLFormElement>, movie:Movie)=>void
}
interface Movie{
  title: string,
  year: string
}

export const AddForm =({ 
    handleClose,
    handleAdd
}:AddFormProps) => {

    const [errors, setErrors] = useState<Errors>({});
    const [movie, setMovie] = useState<Movie>({
      title: "",
      year: " "
    });
    const fieldIsValid = useCallback( () => {
      const errors:Errors = {};
      const { title, year } = movie;
      const yearPattern = /^(19|20)\d{2}$/;
      const textPattern = /^[a-zA-Z0-9 .!?"-]+$/
      if (!title) errors.titleRequired = "*Title is required";
      if (!title.match(textPattern)) errors.validTitle = "* Title is not valid, please insert title in English";
      if (!year) errors.yearRequired = "* Year is required";
      if (!year.match(yearPattern)) errors.validYear = "* Valid year is required";
      setErrors(()=>errors);

      return (Object.keys(errors).length === 0) 
    },[movie])
    const debounce = (fn:Function) => {
      let timerId:ReturnType <typeof setTimeout>;
      return (...args:any) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), 200);
      }
    };
    const handleChange = (name:string, value:string) => {
      setMovie(prevMovie => ({
        ...prevMovie,
        [name]: value
      }));
    };
    
    const optimizedhandle = useCallback(debounce(handleChange),[]);
    
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
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