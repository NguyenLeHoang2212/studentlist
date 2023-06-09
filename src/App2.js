
/*import "./style.css"*/
/*import "./style2.css"*/
import axios from "axios"
import Header from "./component3/header/Header"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./page2/home/Home"
import MovieList from "./component3/movieList/MovieList"
import Card from "./component3/card/Card"
import MovieDetail from "./page2/moviedetail/MovieDetail"
import "./stylefilm.css"
export default function App2() {
  return (

    <div>
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<MovieList />}></Route>
        <Route path="/movies/:type" element={<MovieList />}></Route>
        <Route path="/movie/:id" element={<MovieDetail/>}></Route>
    
       
      </Routes>

    </div>
  )

}
