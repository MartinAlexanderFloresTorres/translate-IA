import axios from 'axios';

export const clientAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDk1ZDJlODQ0NDM0YzM5NzYxZGM2ZWVkMWExMmI4YiIsIm5iZiI6MTcyMjYyODM2Mi42ODQ1MjUsInN1YiI6IjYyMjdhMTQ0NDFhNTYxMDA0NGVlNjMwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LZjS3Q5w64hCxUITgQfb_TrnaL7NvbflDSn0OvF5sQ8',
  },
});
