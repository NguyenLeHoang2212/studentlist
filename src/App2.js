
/*import "./style.css"*/
/*import "./style2.css"*/
import axios from "axios"
import Header from "./component3/header/header"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
export default function App2() {
  return (

    <div>
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
       
      </Routes>

    </div>
  )

}
