import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Home from "../src/Components/Pages/Home.jsx";
import Celebrity from "../src/Components/Pages/Celebrity.jsx";
import Movies from "../src/Components/Pages/Movies.jsx";
//import Tv from "./Components/Pages/Tv.jsx";
import Tv from "../src/Components/Tv/Tv.jsx"
import Header from "../src/Components/Header.jsx"
//import Detail from "../src/Components/Pages/Detail.jsx";
import Detail from "./Components/Pages/Detail.jsx";
import LoginForm from './Components/Pages/LoginForm.jsx';
import NotFound from './Components/Pages/NotFound.jsx';

function App() {
return(
  <div className="root-wrap">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/tv" element={<Tv/>}/>
        <Route path="/celelbrity" element={<Celebrity/>}/>
        <Route path="/movie/:title" element={<Detail/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="*" element={<NotFound/>}/>
        /* 가장 마지막에 위치시키는 게 포인트 */
      </Routes>
    </BrowserRouter>
  </div>
);
}
export default App;
