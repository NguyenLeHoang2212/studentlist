import { Link,Outlet } from "react-router-dom";
import { getProductById, getProducts } from "./data";
import { useParams } from "react-router-dom";
export default function Product(){
    const param=useParams()
    const data=getProductById(parseInt(param.id))
    return (
        <div>sản phẩm chi tiết : {data.name}</div>
    )
}