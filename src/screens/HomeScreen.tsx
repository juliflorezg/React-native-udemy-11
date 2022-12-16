import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
// import movieDB from '../api/movieDB';
// import {MovieDBNowPlaying} from '../interfaces/movieInterface';
import {useMovies} from '../hooks/useMovies';
export const HomeScreen = () => {
  const {isLoading, currentMovies} = useMovies();

  console.log(currentMovies[4]?.title);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="turquoise" size={75} />
      </View>
    );
  }

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
