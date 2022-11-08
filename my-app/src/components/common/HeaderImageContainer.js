import React from "react";
import cinema_img  from '../../assets/img/cinema_img.jpg';
import LazyLoad from 'react-lazy-load';



export const HeaderImageContainer = React.memo(() => {
  return (
      <div>
        <LazyLoad offsetVertical={800}>
           <img src={cinema_img} alt="cinema-background" />
        </LazyLoad> 
      </div>    
  );
});


