import React from "react";
import {TextInputContainer} from '../../common/TextInputContainer';

interface EditBodyProps{
    handleChange:(event: React.ChangeEvent<HTMLInputElement>)=>void,
    movie:{
        title:string, 
        year:string,  
        director:string, 
        runtime:string,
        genre:string
    }
}


export const EditBody =({ handleChange,movie}:EditBodyProps) => {
    const {title, year,  director, runtime, genre } = movie;
    
    return (
        <div className="modal-body" >
            <TextInputContainer 
                labelName ='Title'
                labelValue={title}
                inputName ='title'
                placeholder='title...'
                handleChange={handleChange}
            />
            <TextInputContainer 
                labelName ='Director'
                labelValue={director}
                inputName ='director'
                placeholder='director...'
                handleChange={handleChange}
            />
            <TextInputContainer 
                labelName ='Genre'
                labelValue={genre}
                inputName ='genre'
                placeholder='genre...'
                handleChange={handleChange}
            />
            <TextInputContainer 
                labelName ='Runtime'
                labelValue={runtime}
                inputName ='runtime'
                placeholder='runtime...'
                handleChange={handleChange}
            />
            <TextInputContainer 
                labelName ='Year'
                labelValue={year}
                inputName ='year'
                placeholder='year...'
                handleChange={handleChange}
            />
        </div>
    );
};