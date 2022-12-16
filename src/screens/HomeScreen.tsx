import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import movieDB from '../api/MovieDB';
export const HomeScreen = () => {
  useEffect(() => {
    movieDB.get('/now_playing').then(res => {
      console.log(JSON.stringify(res.data.results, null, 2));
    });
  });

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
