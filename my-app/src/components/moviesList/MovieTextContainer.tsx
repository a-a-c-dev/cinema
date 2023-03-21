import React  from "react";

interface MovieTextContainerProps{
    text?:string, 
    label?:string
}

export const MovieTextContainer =React.memo(({text, label}:MovieTextContainerProps) => {
    return (
        <span>
            <span>{label}</span>
             {text}
        </span>
    )
});