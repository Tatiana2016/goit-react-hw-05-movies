import React, { useEffect, useState } from 'react';
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
      {movies && movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.original_title}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
