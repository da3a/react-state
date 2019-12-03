import React, {useContext} from "react"

import {MovieContext} from "./MovieContext"

function Movie({movie})
{
    const [value, setValue] = useContext(MovieContext)

    return (
        <div>
            <span>{movie.title}</span>
        </div>
    )
}

export default Movie