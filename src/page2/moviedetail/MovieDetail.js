import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieList from "../../component3/movieList/MovieList";
import Card from "../../component3/card/Card";
import "./MovieDetail.css"
import { Routes, Route, Link } from "react-router-dom"
export default function MovieDetail() {
    const[data,setMovie]=useState()
    const{id}=useParams()
    const getData=async()=>{
        const url=`http://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        axios.get(url)
        .then((res) => {      
            setMovie(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="movie">
            <div className="movie_intro">
                <img 
                src={`https://image.tmdb.org/t/p/original${data?data.backdrop_path:""}`}
                />
            </div>
            <div className="movie_detail">
                <img 
                src={`https://image.tmdb.org/t/p/original${data?data.poster_path:""}`}
                />
            </div>
        </div>
    )
}