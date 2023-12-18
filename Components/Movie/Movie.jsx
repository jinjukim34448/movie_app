import React, {useState} from "react";
//import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Movie({movie}){//이 Movie 컴포넌트는 movie 객체를 프롭으로 받음
    const poster=`https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
    const [isTooltipVisible, setTooltipVisible]=useState(false);//useState[false, setTooltipVisible]
    //useState 훅을 사용하여 isTooltipVisible 변수 상태를 관리

    const mouseEnter =()=> setTooltipVisible(true);//이벤트리스너 
    const mouseLeave=()=>setTooltipVisible(false);//이벤트리스너

    const navigate=useNavigate();

    const onClick=()=>{ 
        console.log("cliked on poster",movie.title);
        navigate(`/movie/${movie.title}`,{
            state:{id:movie.id, title: movie.title, poster :movie.poster_path, average:movie.vote_average}
        });//훅을 사용해서 상세페이지로 넘어갈 때,state를 전달하여 title을 전달한다.
        console.log('clicked');
    };
    //Movie에서 포스터를 클릭하면 상세페이지로 넘어간다.//상세페이지

    return (//정보를 가져와서   
        <div className="movie" onClick={onClick} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}> 
            <img  
            className="movie_poster" 
            src={poster} 
            alt={movie.title}
            />
            <div className="movie_info">
                <div className="title">
                    <p>{movie.title}</p>
                </div> 
                <div className="vote_average">
                    <p>{movie.vote_average}</p>
                </div>
            </div>

            <div className="details">
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}
export default Movie;