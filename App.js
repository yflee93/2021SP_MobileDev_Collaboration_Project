import React, { Component } from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from './src/components/theme'

import StartScreen from './src/screens/StartScreen'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import DefaultPage from './src/screens/DefaultPage'
import IndiCourtPage from './src/screens/IndiCourtPage'
import AddCourt from './src/screens/AddCourt'

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={StartScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Default' component={DefaultPage} />
            <Stack.Screen name='Individual' component={IndiCourtPage} />
            <Stack.Screen name='AddCourt' component={AddCourt} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
