import React, { Component } from 'react'
import Background from '../components/Background'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Header from '../components/Header'

import { userbook, passwordbook } from '../../assets/userbook'

export default class Register extends Component {
  state = {
    username: '',
    password1: '',
    password2: '',
  }

  onsubmit = () => {
    console.log(userbook)
    if (this.state.username == '') {
      alert('username cannot be empty')
      return
    }
    if (this.state.password1 == '' || this.state.password2 == '') {
      alert('password cannot be empty')
      return
    }

    let index = userbook.indexOf(this.state.username)
    if (index !== -1) {
      alert('This username has been used!')
    } else {
      if (this.state.password1 === this.state.password2) {
        console.log('Successful!')
        userbook.push(this.state.username)
        passwordbook.push(this.state.password1)
        console.log(userbook)
        this.props.navigation.navigate('Default')
      } else {
        alert('passwords should be confirmed correctly!')
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
