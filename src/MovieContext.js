import React, {createContext, useState} from "react"

export const MovieContext = createContext()

export function MovieProvider(props){
    const [value, setValue] = useState(
        [
            {title: "Star Wars"},
            {title: "Star Trek"},
            {title: "Lord of the Rings"}
        ]
    )

    return(
        <MovieContext.Provider value={[value, setValue]}>
            {props.children}
        </MovieContext.Provider>
    )
}