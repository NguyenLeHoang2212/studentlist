import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../card/Card";
import "./MovieList.css"

const MovieList=()=>{
    const [movieList,setMovieList]=useState([])
    const {type}=useParams();
   
    const getData=async()=>{
        const url=`http://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        axios.get(url)
        .then((res) => {
            // handle success
            
            setMovieList(res.data.results)
            console.log(res.data.results);
            console.log(movieList)
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
    }
    useEffect(() => {
        getData();
    }, []);
    
    return(
        <div className="listcard">
            
            <div className="list_cards">
                {movieList.map((movie,index)=>(
                    <Card key={index} movie={movie}/>
                ))}
            </div>
        </div>

    )
}
export default MovieList;