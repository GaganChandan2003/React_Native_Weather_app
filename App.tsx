import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Country from './screens/Country';
import CapitalInformation from './screens/CapitalInformation';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Homepage'}}
        />
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="CapitalInformation" component={CapitalInformation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack