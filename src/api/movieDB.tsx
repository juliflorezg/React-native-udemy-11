import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'ae30fe6528ba893199567c54a4cc781f',
  },
});

export default movieDB;
