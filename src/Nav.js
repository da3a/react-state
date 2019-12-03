import React, {useContext} from "react"

import {MovieContext} from "./MovieContext"

function Nav()
{
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div className="navbar-brand">
            A simple example using Context API for state management
    <div>MovieCount: {movies.length}</div>
        </div>
    )
}


export default Nav