import React from 'react';
import {AddInputsContainer} from './AddInputsContainer';

 export const AddBody = ({ errors, handleChange }) =>{
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