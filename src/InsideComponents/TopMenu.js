import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native'

import { loadAllReservations } from '../service/serviceInterface'

export default class TopMenu extends Component {
  state = {
    username: this.props.username,
    reservations: [],
  }

  checkinPress = () => {
    Alert.alert('Confirm', 'Check-in for your reservation', [
      {
        text: 'Check-in',
        onPress: () =>
          Alert.alert(
            'Success',
            'You have checked-in.                      Enjoy your time!',
            [
              {
                text: 'Ok',
                onPress: () => console.log('Pressed OK'),
              },
            ]
          ),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('You canceled'),
      },
    ])
  }

  checkoutPress = () => {
    Alert.alert('Confirm', 'Check-out for your reservation', [
      {
        text: 'Check-out',
        onPress: () =>
          Alert.alert(
            'Success',
            'You have checked-out.                    Have a nice day!',
            [
              {
                text: 'Ok',
                onPress: () => console.log('Pressed OK'),
              },
            ]
          ),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('You canceled'),
      },
    ])
  }

  cancelPress = () => {
    Alert.alert('Confirm', 'Do you want to cancel your reservation?', [
      {
        text: 'Yes',
        onPress: () =>
          Alert.alert(
            'Success',
            'You have canceled your reservation. See you next time!',
            [
              {
                text: 'Ok',
                onPress: () => console.log('Pressed OK'),
              },
            ]
          ),
      },
      {
        text: 'No',
        onPress: () => console.log('You canceled'),
      },
    ])
  }

  componentDidMount() {
    loadAllReservations(this.state.username).on('value', (snapshot) => {
      let data = snapshot.val()
      if (data) {
        let keys = Object.keys(data)
        let values = Object.values(data)
        let temp = []
        for (let i = 0; i < keys.length; i++) {
          temp.push({
            key: keys[i],
            value: values[i],
          })
        }
        this.setState({ reservations: temp })
      } else {
        this.setState({ reservations: [] })
      }
    })
  }

  render() {
    const componentList = this.state.reservations.map((el, index) => (
      <View
        key={index}
        style={{
          padding: 20,
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          marginVertical: 2,
        }}
      >
        <Text>{el.value.courtName}</Text>
        <Text>{el.value.time}</Text>

        <View style={styles.appButtonSection}>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={this.checkinPress}
          >
            <Text style={styles.appButtonText}> Check-In </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={this.checkoutPress}
          >
            <Text style={styles.appButtonText}> Check-Out </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={this.cancelPress}
          >
            <Text style={styles.appButtonText}> Cancellation </Text>
          </TouchableOpacity>
        </View>
      </View>
    ))
    return (
      <View>
        <Text style={styles.sectionHeadingStyle}>
          {this.state.username} 's Reservation Menu
        </Text>
        <ScrollView ref={(ref) => (this.scrollView = ref)} pagingEnabled={true}>
          {componentList}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionHeadingStyle: {
    fontSize: 18,
    width: 400,
    color: 'black',
    backgroundColor: 'orange',
    textAlign: 'center',
  },
  appButtonSection: {
    flex: 2.6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  appButtonContainer: {
    backgroundColor: 'purple',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  appButtonText: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
})
