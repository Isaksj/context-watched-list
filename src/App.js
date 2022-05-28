import MovieList from './MovieList';
import './App.css';
import { MovieProvider } from './MovieContext';
import Nav from './Overview';

function App() {

  return (
      
    <div className="App">
    <MovieProvider>
        <Nav />
      <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
