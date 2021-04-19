import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import { loadAllReservations, cancelReserve } from '../service/serviceInterface'

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

  cancelPress = (el) => {
    Alert.alert('Confirm', 'Do you want to cancel your reservation?', [
      {
        text: 'Yes',
        onPress: () => {
          cancelReserve(
            this.state.username,
            el.key,
            el.value.courtKey,
            el.value.date,
            el.value.time
          )
          Alert.alert(
            'Success',
            'You have canceled your reservation. See you next time!',
            [
              {
                text: 'Ok',
                onPress: () => console.log('OK'),
              },
            ]
          )
        },
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
      <View key={index} style={styles.reserveBox}>
        <Text style={styles.reserveText}>{el.value.courtName}</Text>
        <Text style={styles.reserveText}>{el.value.date}</Text>
        <Text style={styles.reserveText}>{el.value.time}</Text>

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
            onPress={() => this.cancelPress(el)}
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
          {this.state.reservations.length === 0 ? (
            <View style={styles.defaultBox}>
            <Text style={styles.defaultText}>You can make reservations now!</Text>
            </View>
          ) : null}
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
    fontWeight: 'bold',
    width: 400,
    height: 40,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    paddingTop: 10,
    fontFamily: 'American Typewriter',
  },
  appButtonSection: {
    flex: 2.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  appButtonContainer: {
    backgroundColor: '#5a189a',
    borderRadius: 25,
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginTop: 12,
  },
  appButtonText: {
    fontSize: 11,
    color: 'white',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  reserveBox: {
    height: 138,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#FF9E00',
    justifyContent: 'center',
    marginVertical: 5,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
  },
  reserveText: {
    fontFamily: 'Avenir',
  },
  defaultBox: {
    height: 120,
    paddingVertical:20,
    paddingHorizontal: 30,
    backgroundColor: '#FF9E00',
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
    alignItems: 'center'
  },
  defaultText: {
    fontSize: 18,
    fontFamily: 'Avenir',
  }
})
