import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';
export const HomeScreen = () => {
  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing').then(res => {
      console.log(JSON.stringify(res.data.results[0], null, 2));
    });
  });

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
