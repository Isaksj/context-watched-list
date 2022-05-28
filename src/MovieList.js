import Movie from './Movie';
import { useContext } from 'react';
import { MovieContext } from './MovieContext';

function MovieList() {

    const [movies, setMovies] = useContext(MovieContext);

    const seen = [];
    const unseen = [];


    movies.forEach(movie => {
        if (movie.seen === false){
            unseen.push(movie);
        } else {
            seen.push(movie);
        }
    });

    const movieSeen = e => {
        e.preventDefault();
        

        setMovies(newMovieList);

        function newMovieList (prevMovies) {
            const newMovies = prevMovies.map((movie) => {
                if (movie.name === e.target.innerText){
                    movie.seen = true;
                }
                return movie;
            });
            
            return newMovies;
        }
    }

    const movieUnSeen = e => {
        e.preventDefault();
        

        setMovies(newMovieList);

        function newMovieList (prevMovies) {
            const newMovies = prevMovies.map((movie) => {
                if (movie.name === e.target.innerText){
                    movie.seen = false;
                }
                return movie;
            });
            
            return newMovies;
        }
    }

   
  
    
  return (
    <div className="MovieArea">
        <div className="Unseen">
            <ul>
                {unseen.map((movie) => (
                    
                    <Movie name={movie.name} func={movieSeen} />
                    
                ))}
            </ul>
        </div>
        <div className="Line"></div>
        <div className="Seen">
            <ul>
                {seen.map((movie) => (
                    <Movie name={movie.name} func={movieUnSeen} />
                ))}
            </ul>

        </div>

           
        
    </div>
  );
}

export default MovieList;