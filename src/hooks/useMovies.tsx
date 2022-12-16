import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentMovies, setCurrentMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resNowPlaying = await movieDB.get<MovieDBResponse>('/now_playing');
    const resPopular = await movieDB.get<MovieDBResponse>('/popular');
    setCurrentMovies(resNowPlaying.data.results);
    setPopularMovies(resPopular.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    // now-playing
    getMovies();
  }, []);

  return {isLoading, currentMovies, popularMovies};
};
