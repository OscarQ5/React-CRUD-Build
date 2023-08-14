import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const ShowsList = () => {
    const [allShows, setAllShows] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:5555/api/shows").then(res => res.json()).then(setAllShows)
        }, []
    )
    const showsToRender = allShows.map(eachShow => (
        <div key={eachShow.id}>
            <h4>
                <Link to={`/shows/${eachShow.id}`}>{eachShow.title}</Link>
            </h4>
        </div>
    ))

    return (
        <div>
            <h1>All Shows</h1>
            <Link to={"/shows/new"}>Add Show</Link><br />
            {showsToRender}
        </div>
    )
}

export default ShowsList