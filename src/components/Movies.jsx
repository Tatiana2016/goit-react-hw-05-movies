import React, { useState } from 'react';
import { fetchMoviesByKeyword } from './api';

const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    fetchMoviesByKeyword(keyword)
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <h2>Search Results</h2>
      {movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
