import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from '../components/MoviePoster';
// import movieDB from '../api/movieDB';
// import {MovieDBNowPlaying} from '../interfaces/movieInterface';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

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
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* <MoviePoster movie={currentMovies[4]} /> */}
        {/* Carrusel principal */}
        <View style={{height: 440}}>
          <Carousel
            data={currentMovies}
            renderItem={({item}) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        {/* Películas populares */}
        <View
          style={{
            backgroundColor: 'red',
            height: 250,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>En Cines</Text>
          <FlatList
            data={currentMovies}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} width={150} height={200} />
            )}
            keyExtractor={item => String(item.id)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
