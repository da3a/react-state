import React, {useState, useContext} from "react"
import {MovieContext} from "./MovieContext"

function AddMovie()
{
const [title, setTitle] = useState("")
const [movies, setMovies] = useContext(MovieContext)

function updateTitle(e)
{
    setTitle(e.target.value)
}

function addMovie(e){
    e.preventDefault()
    setMovies(prevMovies => [...prevMovies, {title: title}])
}

    return (
        <div>
        <form onSubmit={(e) => addMovie(e)}>
            <input type="text" name="title" value={title} onChange={(e) => updateTitle(e)}/>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default AddMovie