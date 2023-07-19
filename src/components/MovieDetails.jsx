import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from './api';
import { Link } from 'react-router-dom';

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
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>User Score: {movie.vote_average}</p>
      <p>Overview: {movie.overview}</p>
      <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>

      <Link to={`/movies/${movieId}/cast`}>View Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>View Reviews</Link>
    </div>
  );
};

export default MovieDetails;
