import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
  // primary?: string;
  // secondary?: string;
}

export const GradientBackground = ({
  children,
}: // primary = '#084f6a',
// secondary = '#75cedb',
Props) => {
  const {previousColors, colors, setPreviousMainColors} =
    useContext(GradientContext);

  const {opacity, fadeIn, fadeOut} = useFade();
  useEffect(() => {
    fadeIn(() => {
      setPreviousMainColors(colors);
      fadeOut();
    });
  }, [colors]);
  return (
    <View style={{flex: 1, backgroundColor: 'wheat'}}>
      <LinearGradient
        colors={[previousColors.primary, previousColors.secondary]}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
        style={{...StyleSheet.absoluteFillObject}}
      />

      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary]}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
          style={{...StyleSheet.absoluteFillObject}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
