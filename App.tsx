import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Hola Mundo</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
