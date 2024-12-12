import { useState, useEffect } from "react";
import './GenreList.css';

function GenreList(){
    const [genres, setGenres] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/genres', {           
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data['results']);
            console.log(data['totalResults']);
            setGenres(data['results']);
            setTotalResults(data['totalResults']);
        })
        .catch(setError)
    }, []);
    if (error) {
        return (<h1>There was an error</h1>);
    } else if (totalResults == 0) {
        return (
            <h1>There are no genres found.</h1>
        );
    }
    
    const listing = genres.map((genre) => <li key={genre}>{genre}</li>);
    return (
        <>
            <h1>Number of Genres: {totalResults}</h1>
            <ul>
            {listing}
            </ul>
        </>
        

    );
}

export default GenreList;