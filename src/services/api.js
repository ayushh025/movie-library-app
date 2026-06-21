import axios from "axios";

const API_KEY = "c8c33512";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchPopularMovies = () => {
  return axios.get(`${BASE_URL}?apikey=${API_KEY}&s=marvel`);
};

export const searchMovies = (query) => {
  return axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
};

export const fetchMovieDetails = (id) => {
  return axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
};