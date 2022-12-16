import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
// import movieDB from '../api/movieDB';
// import {MovieDBNowPlaying} from '../interfaces/movieInterface';
import {useMovies} from '../hooks/useMovies';
export const HomeScreen = () => {
  const {isLoading, currentMovies} = useMovies();
  const {top} = useSafeAreaInsets();

  // console.log(currentMovies[4]?.title);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="turquoise" size={75} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster movie={currentMovies[4]} />
    </View>
  );
};
