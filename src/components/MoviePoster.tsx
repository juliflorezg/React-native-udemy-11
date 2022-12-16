import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {
  console.log(movie.poster_path);

  const uri = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <View style={styles.imageContainer}>
      {/* <Text>{movie.title}</Text>
      <Text>{movie.poster_path}</Text> */}

      <Image
        source={{
          uri,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 420,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 15,
    // width: 100,
    // height: 100,
  },
});
