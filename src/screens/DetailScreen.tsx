import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
// import {Movie} from '../interfaces/movieInterface';

const {height: screenHeight} = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie.original_title);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.imagePoster} />
      </View>
      {/* <Text>{movie.original_title}</Text> */}
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 10,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    overflow: 'hidden',
  },
  imagePoster: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginVertical: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
