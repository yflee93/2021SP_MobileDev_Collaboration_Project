import React, { Component } from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'

export default class StartScreen extends Component {
  render() {
    
    return (
      <Background>
        <Header>Go Tennis!</Header>
        <Button
          mode='contained'
          onPress={() => this.props.navigation.navigate('Login')}
        >
          Login
        </Button>
        <Button
          mode='outlined'
          onPress={() => this.props.navigation.navigate('Register')}
        >
          Sign Up
        </Button>
        <Button
          mode='outlined'
          onPress={() => this.props.navigation.navigate('Individual')}
        >
          Individual Court
        </Button>
      </Background>
    )
  }
}
