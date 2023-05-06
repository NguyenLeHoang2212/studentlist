import { useEffect, useState } from "react";

import axios from "axios";
import { BsTypeH1 } from "react-icons/bs";
export default function ApiWeather() {
    const [data, setData] = useState(null)
    const [text, setText] = useState("Hà Nội")
    const [error, setError] = useState("")
    const getData = async () => {
        const APIkey = "e0ddc538b3415427caeb7901218a30dd"

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${APIkey}`
        axios.get(url)
            .then((res) => {
                // handle success
                console.log(res.data);
                setData(res.data)
            })
            .catch((error) => {
                // handle error
                if (error.response.status = "404") {
                    setError("Invalid City Name")
                }
               
                console.log(error);
            })

    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => { setText(e.target.value) }}
                onKeyPress={(e) => {
                    if (e.key == "Enter" && text) {
                        getData()
                        setText("")
                        setError("")
                    }
                }
                }
            />
            {error && (<h1>{error}</h1>)}
            {
                data && (
                    <>
                        <h1>Temp {data.main.temp}</h1>
                        <h1>{data.name}</h1>
                        <h1>{data.sys.country}</h1>
                        <h1>{data.weather[0].description}</h1>
                        <img
                            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                        />
                    </>
                )
            }
        </div>
    )
}