import React, {useState, createContext} from 'react';

export const MovieContext = createContext();



export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "10",
            id: 12345,
            seen: false,
        },
        {
            name: "Game of Thrones",
            price: "5",
            id: 13243,
            seen: false,
        },
        {
            name: "Inception",
            price: "7",
            id: 24134,
            seen: false,
        },
        {
            name: "Silver linings playbook",
            price: "7",
            id: 24132,
            seen: false,
        },
        {
            name: "Dead man chest",
            price: "7",
            id: 24100,
            seen: false,
        },
    ]);
   

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );  
}

