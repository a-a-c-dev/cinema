import React from 'react';
import {AddInputsContainer} from './AddInputsContainer';

interface AddBodyProps{
    handleChange:()=>void,
    errors:{
        titleRequired?:string,
        validTitle?:string,
        yearRequired?:string,
        validYear?:string
    }
}


 export const AddBody = ({ errors, handleChange }:AddBodyProps) =>{
    return (
        <div className="modal-body">
            <AddInputsContainer
                labelName='Title'
                inputName='title'
                placeholder="Movie Title..."
                error={errors.titleRequired||errors.validTitle}
                handleChange={handleChange}
            />
            <AddInputsContainer
                labelName='Year'
                inputName='year'
                placeholder="Movie Year..."
                error={errors.yearRequired||errors.validYear}
                handleChange={handleChange}
            />
        </div>
    )
}