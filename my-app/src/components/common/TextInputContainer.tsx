import React from 'react';
interface TextInputContainerProps{
  labelName:string,
  labelValue:string,
  inputName:string,
  placeholder:string, 
  handleChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
}
 export const TextInputContainer = ({labelName,labelValue, inputName, placeholder, handleChange }:TextInputContainerProps) =>{
    return (
        <span className="form-group">
                  <label>{labelName}: {labelValue}</label>
                  <input
                    className="form-control"
                    name={inputName}
                    onChange={handleChange}
                    placeholder={placeholder}
                  />        
        </span>
    )
}