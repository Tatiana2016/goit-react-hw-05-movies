import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      {movies && movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <div>
            <h3>{movie.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Movies;
