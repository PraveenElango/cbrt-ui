import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home"

class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c343b',
          },
          headerTintColor: '#fafabe',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false,
        }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }
}

export default App;

const Stack = createStackNavigator();