import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native'

import { addCourt } from '../service/serviceInterface'

export default class TestAdd extends Component {
  state = {
    name: '',
    address: '',
    location: '',
    ratings: 0,
    popularity: 0,
    maintainence: 0,
    rank: 0,
  }

  handleSubmit = async () => {
    addCourt(this.state)
    Alert.alert('success!')
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Court</Text>
        <TextInput
          style={styles.itemInput}
          placeholder='name'
          onChangeText={(text) => this.setState({ name: text })}
        />
        <TextInput
          style={styles.itemInput}
          placeholder='address'
          onChangeText={(text) => this.setState({ address: text })}
        />
        <TextInput
          style={styles.itemInput}
          placeholder='location'
          onChangeText={(text) => this.setState({ location: text })}
        />
        <TextInput
          style={styles.itemInput}
          placeholder='ratings'
          onChangeText={(text) => this.setState({ ratings: parseFloat(text) })}
        />
        <TextInput
          style={styles.itemInput}
          placeholder='popularity'
          onChangeText={(text) => this.setState({ popularity: parseInt(text) })}
        />
        <TextInput
          style={styles.itemInput}
          placeholder='maintainence(0-5 points)'
          onChangeText={(text) =>
            this.setState({ maintainence: parseFloat(text) })
          }
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor='white'
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginTop: 10,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
})
