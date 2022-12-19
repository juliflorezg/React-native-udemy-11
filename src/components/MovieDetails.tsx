import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Cast} from '../interfaces/creditsInterface';
import {FullMovie} from '../interfaces/movieInterface';
import {CastItem} from './CastItem';

interface Props {
  fullMovie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({fullMovie, cast}: Props) => {
  return (
    <>
      {/* detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 7}}>
            <Icon name="star" color="grey" size={16} />
          </Text>
          <Text style={{marginRight: 7}}>
            {fullMovie.vote_average.toFixed(2)}
          </Text>
          <Text style={{marginRight: 7}}>
            {fullMovie.genres.map(genre => genre.name).join(' - ')}
          </Text>
        </View>

        {/* historia */}
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Overview
        </Text>
        <Text style={{fontSize: 16, color: 'black'}}>{fullMovie.overview}</Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Budget
        </Text>
        <Text style={{fontSize: 16, color: '#007629'}}>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(fullMovie.budget)}
        </Text>
      </View>
      {/* casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 20,
          }}>
          Cast{' '}
        </Text>
        {/* <CastItem actor={cast[0]} /> */}
        <FlatList
          data={cast}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 120}}
        />
      </View>
    </>
  );
};
