import React  from "react";


export const MovieTextContainer =React.memo(({text, label}) => {
    return (
        <span>
            <span>{label}</span>
             {text}
        </span>
    )
});