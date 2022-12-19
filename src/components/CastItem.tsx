import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  let defaultActorImage: JSX.Element;
  if (!actor.profile_path) {
    switch (actor.gender) {
      case 0:
      case 2:
        defaultActorImage = (
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?b=1&s=612x612&w=0&k=20&c=SglMfLhVtHrJei2x9az3Fwqin6icpFD_2lgD0eqZVZA=',
            }}
            style={{width: 100, height: 100, borderRadius: 10}}
          />
        );
        break;
      case 1:
        defaultActorImage = (
          <Image
            source={{
              uri: 'https://homecorpfinance.com.au/wp-content/uploads/2020/06/female_avatar.jpg',
            }}
            style={{width: 100, height: 100, borderRadius: 10}}
          />
        );
    }
  }

  return (
    <View style={styles.container}>
      {actor.profile_path ? (
        <Image
          source={{uri}}
          style={{width: 100, height: 100, borderRadius: 10}}
        />
      ) : (
        defaultActorImage!
      )}
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          {actor.name}
        </Text>
        <Text style={{fontSize: 16, color: '#222'}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 7,
    elevation: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 5,
    paddingRight: 15,
  },
  actorInfo: {
    paddingTop: 10,
    marginLeft: 15,
  },
});
