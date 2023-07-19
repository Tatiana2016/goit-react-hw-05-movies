import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from './api';
import styled from 'styled-components';

const CastContainer = styled.div`
  margin-top: 20px;
`;

const ActorName = styled.h3`
  margin-bottom: 10px;
`;

const ActorPhoto = styled.img`
  width: 200px;
  height: 350px;
  object-fit: cover;
`;

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
      {cast.map(actor => (
        <CastContainer key={actor.id}>
          <ActorName>{actor.name}</ActorName>
          <ActorPhoto src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
          <p>Character: {actor.character}</p>
        </CastContainer>
      ))}
    </div>
  );
};

export default Cast;
