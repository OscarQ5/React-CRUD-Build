import { useEffect, useState } from "react"


const ShowsList = () => {
    const [allShows, setAllShows] = useState([])
    console.log(allShows)
    useEffect(
        () => {
            fetch("http://localhost:5555/api/shows").then(res => res.json()).then(setAllShows)
        }, []
    )
    const showsToRender = allShows.map(eachShow => <div><h4>{eachShow.title}</h4></div>)

    return (
        <div>
            <h1>All Shows</h1>
            {showsToRender}
        </div>
    )
}

export default ShowsList