import React, { Component } from 'react'

import Button from '../components/Button'
import Background from '../components/Background'
import TextInput from '../components/TextInput'
import Header from '../components/Header'

import { Alert } from 'react-native'

import { checkIfUserExists } from '../service/serviceInterface'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  onsubmit = async () => {
    if (this.state.username === '') {
      Alert.alert('Username cannot be empty!')
      return
    }
    if (this.state.password === '') {
      Alert.alert('Paasword cannot be empty!')
      return
    }
    let indb = await checkIfUserExists(this.state.username)
    if (!indb) {
      Alert.alert('Username does not exist!')
    } else {
      if (indb === this.state.password) {
        Alert.alert('Successful!')
        this.props.navigation.navigate('Default', {
          username: this.state.username,
        })
      } else {
        Alert.alert('Wrong password!')
      }
    }
  }

  toRegister = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <Background>
        <Header>Welcome Back!</Header>
        <TextInput
          label='Username'
          returnKeyType='next'
          value={this.state.username.value}
          onChangeText={(text) => this.setState({ username: text })}
          autoCapitalize='none'
        />

        <TextInput
          label='Password'
          returnKeyType='done'
          value={this.state.password.value}
          onChangeText={(text) => this.setState({ password: text })}
          secureTextEntry
        />

        <Button mode='contained' onPress={this.onsubmit}>
          Login
        </Button>
        <Button mode='contained' onPress={this.toRegister}>
          Register
        </Button>
      </Background>
    )
  }
}
