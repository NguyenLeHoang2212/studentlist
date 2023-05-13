import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../component3/header/Header";
import Card from "../../component3/card/Card";
import MovieList from "../../component3/movieList/MovieList";
const Home=()=>{
    
    return(
        <>
        <div className="poster">
        <MovieList />
        </div>
        </>
    )
}
export default Home;