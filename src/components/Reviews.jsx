import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { fetchMovieReviews } from './api';

const Reviews = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(error => console.error('Error:', error));
  }, [movieId]);

  return (
    <div>      
      {reviews.map(review => (
        <div key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}

      <Link to={`/movies/${movieId}`} state={{ from: location }}>
        Go back to Movie Details
      </Link>
    </div>
  );
};

export default Reviews;
