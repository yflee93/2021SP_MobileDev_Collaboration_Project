import React, { Component } from 'react'
import { Provider } from 'react-native-paper'
import { Text, View, FlatList, StyleSheet, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from './src/components/theme'

import StartScreen from './src/screens/StartScreen'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Default from './src/screens/Default'
import IndiCourtPage from './src/screens/IndiCourtPage'

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      // <Provider theme={theme}>
      //   <NavigationContainer>
      //     <Stack.Navigator>
      //       <Stack.Screen name='Home' component={StartScreen} />
      //       <Stack.Screen name='Login' component={Login} />
      //       <Stack.Screen name='Register' component={Register} />
      //       <Stack.Screen name='Default' component={Default} />
      //     </Stack.Navigator>
      //   </NavigationContainer>
      // </Provider>
      <View style={styles.container}>
        <IndiCourtPage/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
})
