import React, { Component } from 'react'

import Button from '../components/Button'
import Background from '../components/Background'
import TextInput from '../components/TextInput'
import Header from '../components/Header'

import { userbook, passwordbook } from '../../assets/userbook'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  onsubmit = () => {
    if (this.state.username === '') {
      alert('Username cannot be empty!')
      return
    }
    if (this.state.password === '') {
      alert('Paasword cannot be empty!')
      return
    }
    let index = userbook.indexOf(this.state.username)
    if (index === -1) {
      alert('Username does not exist!')
    } else {
      if (passwordbook[index] === this.state.password) {
        console.log('Successful!')
        this.props.navigation.navigate('Default')
      } else {
        alert('Wrong password!')
      }
    }
  }

  toRegister = () => {
    this.props.navigation.navigate('Register')
    console.log(userbook)
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
