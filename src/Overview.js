import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';

const Overview = () => {

    const [movies] = useContext(MovieContext);

    let newMovies = 0;
    let oldMovies = 0;


    movies.forEach(movie => {
        if (movie.seen === false){
            newMovies += 1;
           
        } else {
            oldMovies += 1;
          
        }
    });


    

    
   

    return (
        <>
        <h2 className='title'>Context Management</h2>
        <div className="Overview">
            <h3>New: {newMovies} </h3>
            <h3>Total: {movies.length} </h3>
            <h3>Seen: {oldMovies} </h3>
            
          
        </div>
        </>
    );  
}

export default Overview;