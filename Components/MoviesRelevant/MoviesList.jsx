import { useEffect, useState } from "react"


const MoviesList = () => {
    const [allMovies, setAllMovies] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:5555/api/movies").then(res => res.json()).then(setAllMovies)
        }, []
    )
    const moviesToRender = allMovies.map(eachMovie => <div key={eachMovie.id}><h4>{eachMovie.title}</h4></div>)

    return (
        <div>
            <h1>All Movies</h1>
            {moviesToRender}
        </div>
    )
}

export default MoviesList