import React, { useState } from "react";
import { useLocation,useNavigate,useParams } from "react-router-dom";
//import Movie from '../Movie';

function Detail(){//Movie 컴포넌트에서 클릭 이벤트가 발생하면 Detail로 넘어와야 됨.
   
    //const [movieInfo,setMovieInfo]=useState();
    
    const location =useLocation();
    //const {title,poster,average}=useParams();
    const {title,poster,average}=location.state;
    const pos=`https://image.tmdb.org/t/p/w1280${poster}`;
    
    console.log(title);
    console.log(poster);
    
    return(
        <div>
            <h2>{title}</h2>
            <img src={pos} 
                style={{width:'500px'}}
            alt="포스터"/>
            <p>평점:{average}</p>
        </div>

    );
}

export default Detail;