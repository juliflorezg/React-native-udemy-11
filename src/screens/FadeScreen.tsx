import React, {useRef} from 'react';
import {View, Animated, Button} from 'react-native';
export const FadeScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
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
    </View>
  );
};
