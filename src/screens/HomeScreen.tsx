import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from '../components/MoviePoster';
// import movieDB from '../api/movieDB';
// import {MovieDBNowPlaying} from '../interfaces/movieInterface';
import {useMovies} from '../hooks/useMovies';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';

// get 'width' property from Dimensions and rename it as 'windowWidth'
const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const imageColors = await ImageColors.getColors(uri, {
      fallback: '#75cedb',
      quality: 'high',
    });

    console.log(imageColors);
  };

  // console.log(currentMovies[4]?.title);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="turquoise" size={75} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* <MoviePoster movie={currentMovies[4]} /> */}
          {/* Carrusel principal */}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
