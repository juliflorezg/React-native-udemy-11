import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
// import {Movie} from '../interfaces/movieInterface';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/FontAwesome5';

const {height: screenHeight} = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie.original_title);
  console.log(movie.id);

  const {isLoading, cast, fullMovie} = useMovieDetails(movie.id);

  console.log(isLoading);
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.imagePoster} />
        </View>
      </View>
      {/* <Text>{movie.original_title}</Text> */}
      <View style={{...styles.marginContainer, marginBottom: 5}}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
      ) : (
        <MovieDetails fullMovie={fullMovie!} cast={cast} />
      )}
      {/* Boton para regresar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-circle-left" color="black" size={40} />
      </TouchableOpacity>
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
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  backButton: {
    position: 'absolute',
    top: screenHeight * 0.7 + 50,
    right: 15,
    zIndex: 999,
    elevation: 9,
  },
});
