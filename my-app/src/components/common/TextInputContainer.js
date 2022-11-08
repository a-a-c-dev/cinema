import React from 'react';

 export const TextInputContainer = ({labelName,labelValue, inputName, placeholder, handleChange }) =>{
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