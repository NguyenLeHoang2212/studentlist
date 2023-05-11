import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Invoices() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const getData = async () => {
    const url = `https://645640ac2e41ccf16917c419.mockapi.io/StudentList`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        if (error.response.status === "404") {
          setError("Invalid")
        }
      });
  };
  useEffect(()=>{
    getData();
  },[])
  return(
    <div>
    
    <nav>
      {data && (data.map((item, index) => (
        <Link key={index} to={`/Invoices/${item.id}`}>
          {item.name}
        </Link>
      )))}
    </nav>
    <Outlet />
  </div>
  )
}