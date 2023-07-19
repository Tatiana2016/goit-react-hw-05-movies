import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from './api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      {movies.map(movie => (
        <div key={movie.id}>          
          <Link to={`/movies/${movie.id}`}>
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
