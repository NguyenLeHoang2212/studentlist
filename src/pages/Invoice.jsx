import { useParams } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";
export default function Invoice() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const getData = async () => {
        const url = `https://645640ac2e41ccf16917c419.mockapi.io/StudentList/${parseInt(
            id
        )}`;
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                if (error.response.status === "404") {
                    setError("Invalid");
                }
            });
    };
    useEffect(() => {
        getData();
    }, [id]);
    return <h2>detail: {data && data.name}</h2>;
}