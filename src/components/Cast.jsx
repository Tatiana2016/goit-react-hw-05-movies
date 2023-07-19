import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from './api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(data => setCast(data.cast))
      .catch(error => console.error('Error:', error));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.map(actor => (
        <div key={actor.id}>
          <h3>{actor.name}</h3>
          <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
