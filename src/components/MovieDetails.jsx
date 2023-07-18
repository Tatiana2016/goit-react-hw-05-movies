import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from './api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(error => console.error('Error:', error));
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
