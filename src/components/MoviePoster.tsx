import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  // View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  console.log(movie.poster_path);

  const uri = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  const navigation = useNavigation<any>();

  return (
    // <TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        ...styles.imageContainer,
        width,
        height,
        marginHorizontal: 7,
      }}>
      {/* <Text>{movie.title}</Text>
      <Text>{movie.poster_path}</Text> */}

      <Image
        source={{
          uri,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
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
