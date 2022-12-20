import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
  primary?: string;
  secondary?: string;
}

export const GradientBackground = ({
  children,
  primary = '#084f6a',
  secondary = '#75cedb',
}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'wheat'}}>
      <LinearGradient
        colors={[primary, secondary]}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
        style={{...StyleSheet.absoluteFillObject}}
      />
      {children}
    </View>
  );
};
