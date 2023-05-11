import Api from "./component2/Api"
import ApiWeather from "./component2/ApiWeather"
import StudentList from "./components/StudentList"
/*import "./style.css"*/
/*import "./style2.css"*/
import axios from "axios"
import Home from "./pages/Home"
import Prices from "./pages/Prices"
import Products from "./pages/Products"
import Notfound from "./pages/Notfound"
import Product from "./pages/Product"
import Invoice from "./pages/Invoice"
import Invoices from "./pages/Invoices"
import { Routes, Route, Link } from "react-router-dom"
import TestUseEffect from "./component2/TestUseEffect"
export default function App() {
  return (

    <div>
      <TestUseEffect />
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/prices">Prices</Link></li>
        <li><Link to="/Invoices">Invoice</Link></li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/product" element={<Products/>}>

          <Route path=":id" element={<Product/>}></Route>

        </Route>
        <Route path="/Invoices" element={<Invoices />}>
          <Route path=":id" element={<Invoice />}></Route>
        </Route>
        <Route path="/prices" element={<Prices/>}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>

    </div>
  )

}
