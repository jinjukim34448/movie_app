import React from 'react';
import Movie from "../Movie/Movie.jsx"//컴포넌트를 가져옴
import  movies  from '../../movieDummy.js';

function Movies(){
    const movieList=movies.results;//영화가 여러개 있으니깐

return (
    <div className="app-containter">
      {
        movieList.map((movie)=>(
        <Movie key={movie.id} movie={movie}/>
        ))
      }
    </div>
);
}
export default Movies;