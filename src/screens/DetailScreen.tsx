import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RootStackParams} from '../navigation/Navigation';
// import {Movie} from '../interfaces/movieInterface';
import {Text} from 'react-native';
import {useMovieDetails} from '../hooks/useMovieDetails';

const {height: screenHeight} = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie.original_title);
  console.log(movie.id);

  useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.imagePoster} />
        </View>
      </View>
      {/* <Text>{movie.original_title}</Text> */}
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={styles.marginContainer}>
        <Text>
          <Icon name="star" size={30} color="#000" />;
        </Text>
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
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
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
