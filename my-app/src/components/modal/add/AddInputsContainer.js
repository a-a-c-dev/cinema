import React from "react";
import { Error } from "../../common/Error";


export const AddInputsContainer =({labelName, inputName, handleChange, placeholder, error}) => {


  return (
    <div className="form-group">
                <label>{labelName}</label>
                <input 
                 type="text"
                  className="form-control"
                  name={inputName}
                  required
                  onChange={event=>handleChange(event.target.name, event.target.value)}
                  placeholder={placeholder}
                />
                 {error && <Error error={error}/>}
    </div>
  );
};