import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from './api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(error => console.error('Error:', error));
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
