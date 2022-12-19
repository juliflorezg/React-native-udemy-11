import React from 'react';
import {View, Animated, Button} from 'react-native';
import {useFade} from '../hooks/useFade';
export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'wheat',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: 'teal',
          width: 150,
          height: 150,
          borderColor: 'black',
          borderWidth: 5,
          opacity: opacity,
          marginBottom: 10,
        }}
      />
      <Button title="fade in" onPress={fadeIn} />
      <Button title="fade out" onPress={fadeOut} />
    </View>
  );
};
