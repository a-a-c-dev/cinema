import React from "react";
import { Error } from "../../common/Error";


interface AddInputsContainerProps{
  labelName:string, 
  inputName:string,
  handleChange:(name:string, value:string)=>void, 
  placeholder:string, 
  error?:string
}

export const AddInputsContainer =({labelName, inputName, handleChange, placeholder, error}:AddInputsContainerProps) => {


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