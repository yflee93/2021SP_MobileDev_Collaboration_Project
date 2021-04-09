import React, { Component } from 'react'
import Background from '../components/Background'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Header from '../components/Header'

import { Alert } from 'react-native'

import { createUser, checkIfUserExists } from '../service/serviceInterface'

export default class Register extends Component {
  state = {
    username: '',
    password1: '',
    password2: '',
  }

  onsubmit = async () => {
    if (this.state.username === '') {
      Alert.alert('Username cannot be empty!')
      return
    }
    if (this.state.password1 == '' || this.state.password2 == '') {
      Alert.alert('Password cannot be empty!')
      return
    }

    let indb = await checkIfUserExists(this.state.username)
    if (indb) {
      Alert.alert('Username has been registered!')
    } else {
      if (this.state.password1 === this.state.password2) {
        await createUser(this.state.username, this.state.password1)
        Alert.alert('New user created successfully!')
        this.props.navigation.navigate('Default', {
          username: this.state.username,
        })
      } else {
        Alert.alert('Passwords do not match!')
      }
    }
  }

  render() {
    return (
      <Background>
        <Header>Create Account</Header>
        <TextInput
          label='Username'
          returnKeyType='next'
          value={this.state.username.value}
          onChangeText={(username) => this.setState({ username: username })}
        />

        <TextInput
          label='Password'
          returnKeyType='next'
          value={this.state.password1.value}
          onChangeText={(password1) => this.setState({ password1: password1 })}
          secureTextEntry
        />

        <TextInput
          label='Confirm Password'
          returnKeyType='done'
          value={this.state.password2.value}
          onChangeText={(password2) => this.setState({ password2: password2 })}
          secureTextEntry
        />

        <Button
          mode='contained'
          onPress={this.onsubmit}
          style={{ marginTop: 24 }}
        >
          Sign Up
        </Button>

        <Button
          mode='contained'
          onPress={() => this.props.navigation.navigate('Login')}
          style={{ marginTop: 24 }}
        >
          Back to Login
        </Button>
      </Background>
    )
  }
}
