import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {FullMovie} from '../interfaces/movieInterface';

interface MovieDetails {
  cast: any[];
  isLoading: boolean;
  fullMovie: FullMovie;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    const res = await movieDB.get<FullMovie>(`${movieId}`);

    console.log(res.data.overview);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    state,
  };
};
