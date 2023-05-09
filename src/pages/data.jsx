import { useEffect,useState } from "react";
import axios from "axios";
import Product from "./Product";
let list=[
    {
        id:1,
        name:" Điện thoại ",
    },
    {
        id:2,
        name:" Laptop ",
    },
    {
        id:3,
        name:" Máy tính bảng ",
    },
    {
        id:4,
        name:" Xe ",
    },
]
export const getProducts=()=>{
    return list;
}
export const getProductById=(id)=>{
    return list.find((item)=> item.id===id)
}