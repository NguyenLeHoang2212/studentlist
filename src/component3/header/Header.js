import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import "./Header.css"
const Header=()=>{
    return(
        <div className="header">
            <div className="headerleft">
                <Link to="/">
                <img
                src="https://about.netflix.com/images/meta/netflix-symbol-black.png" 
                className="logo"
                />
                </Link>
                <div className="tt">
                <Link to="/movie/popular" style={{textDecoration:"none"}}>
                <span>Popular</span>
                </Link>
                <Link to="/movie/top_rated" style={{textDecoration:"none"}}>
                <span>Top Rated</span>
                </Link>
                <Link to="/movie/upcoming" style={{textDecoration:"none"}}>
                <span>Upcoming</span>
                </Link>
                </div>
                
            </div>
        </div>
    )
}
export default Header;