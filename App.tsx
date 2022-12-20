import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {GradientContextProvider} from './src/context/GradientContext';
// import {FadeScreen} from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <GradientContextProvider>
        <Navigation />
      </GradientContextProvider>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
