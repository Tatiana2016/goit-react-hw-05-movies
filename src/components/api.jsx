const API_KEY = '05a2fb56bd80310a95255105f59556f4';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = () => {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
  return fetch(url).then(response => response.json());
};

const fetchMoviesByKeyword = keyword => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`;
  return fetch(url).then(response => response.json());
};

const fetchMovieDetails = movieId => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  return fetch(url).then(response => response.json());
};

const fetchMovieCredits = movieId => {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  return fetch(url).then(response => response.json());
};

const fetchMovieReviews = movieId => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  return fetch(url).then(response => response.json());
};

export {
  fetchTrendingMovies,
  fetchMoviesByKeyword,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};