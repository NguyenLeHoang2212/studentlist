import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"
const Card = (props) => {
  const { movie } = props;
  return (
    <div className="card">
      <Link className="listfim"
      to={`/movie/${movie.id}`}
      >
      <img src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
       <div className="tittle">
       <p>{movie.title}</p>
        <p >{movie.overview}</p>
        
        <p>{movie.vote_average}</p>
        <p>{movie.release_date}</p>
       </div>
       
      </Link>
    </div>
  );
};

export default Card;