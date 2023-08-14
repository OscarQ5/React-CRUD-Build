import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null)
    useEffect(
        () => {
            fetch("http://localhost:5555/api/shows")
            .then(res => res.json())
            .then(data => {
                const foundShow = data.find(show => show.id === id)
                setShow(foundShow)
            })
        }, [id]
    )

    if (!show) return <div>Loading...</div>

    return (
        <div>
            <h1>{show.title}</h1>
            <p>Type: {show.type}</p>
            <p>Country: {show.country}</p>
            {show.dateAdded ? <p>Date Added: {show.dateAdded}</p> : <></>}
            <p>Release Year: {show.releaseYear}</p>
            {show.rating ? <p>Rating: {show.rating}</p> : <></>}
            <p>Duration: {show.duration}</p>
            <p>Genre: {show.listedIn}</p>
            <p>Description: {show.description}</p>

        </div>
    );
};

export default ShowDetails;
