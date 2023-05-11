import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../component3/header/header";
const Home=()=>{
    const [data, setData] = useState(null)
    const getData = async () => {
        const APIkey = "4e44d9029b1270a757cddc766a1bcb63"
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
        axios.get(url)
            .then((res) => {
                // handle success
                console.log(res.data);
                setData(res.data)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })

    }
    useEffect(() => {
        getData();
    }, []);
    return(
        <>
        <div className="poster">
            Movie
        </div>
        </>
    )
}
export default Home;