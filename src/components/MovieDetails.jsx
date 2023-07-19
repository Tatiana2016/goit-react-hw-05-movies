import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from './api';
import Cast from './Cast';
import Reviews from './Reviews';
import styled from 'styled-components';

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;  
`;

const MoviePoster = styled.img`
  width: 280px;
  height: 350px;
  object-fit: cover;
`;

const MovieInfoContainer = styled.div`
  margin-left: 20px;
`;

const AdditionalInfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AdditionalInfoHeader = styled.h3`
  margin-bottom: 10px;
  font-size: 22px;
`;

const AdditionalInfoLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const GoBackContainer = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(error => console.error('Error:', error));
  }, [movieId]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const userScorePercent = Math.round(movie.vote_average * 10);

  return (
    <div>
      <GoBackContainer>
        <Link onClick={handleGoBack} style={{ fontSize: '22px' }}>
          <span>&#8592;</span> Go Back
        </Link>
      </GoBackContainer>
      <MovieDetailsContainer>
        <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div>
          <MovieInfoContainer>
            <h2 style={{ fontSize: '32px' }}>{movie.title}</h2>
            <p style={{ marginBottom: '10px', fontSize: '22px' }}><strong>User Score:</strong> {userScorePercent}%</p>
            <p style={{ fontSize: '22px' }}><strong>Overview:</strong></p>
            <p style={{ fontSize: '22px' }}>{movie.overview}</p>
            <p style={{ fontSize: '22px' }}><strong>Genres:</strong></p>
            <p style={{ fontSize: '22px' }}>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </MovieInfoContainer>
          <AdditionalInfoContainer>
            <AdditionalInfoHeader style={{ fontSize: '22px' }}>Additional Information</AdditionalInfoHeader>
            <AdditionalInfoLinks>
              <Link onClick={() => handleTabClick('cast')} style={{ fontSize: '22px' }}>Cast</Link>
              <Link onClick={() => handleTabClick('reviews')} style={{ fontSize: '22px' }}>Reviews</Link>
            </AdditionalInfoLinks>
          </AdditionalInfoContainer>
        </div>
      </MovieDetailsContainer>
      <div>
        {activeTab === 'cast' && <Cast />}
        {activeTab === 'reviews' && <Reviews />}
      </div>
    </div>
  );
};

export default MovieDetails;
