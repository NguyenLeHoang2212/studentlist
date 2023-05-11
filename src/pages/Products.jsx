import { Link,Outlet } from "react-router-dom";
import { getProducts } from "./data";
import { getProductById } from "./data";
import axios from "axios";
export default function Products(){
    const data=getProducts()
    return (
        <div>
            Products
        <nav>
            {
                data.map((item,index)=>(
                    <Link key={index} to={`/product/${item.id}`}>
                 
                    <br></br>
                    {item.name}
                    </Link>
                ))
            }
        </nav>
        <br></br>
        <Outlet/>
        </div>
    )
}