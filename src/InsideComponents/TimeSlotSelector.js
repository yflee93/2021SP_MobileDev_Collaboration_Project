import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Alert } from 'react-native'
import ButtonReserve from '../components/ButtonReserve'
import { reserve, loadAllReservationsInDate } from '../service/serviceInterface'

const timeSlot = [
  '6am-7am',
  '7am-8am',
  '8am-9am',
  '9am-10am',
  '10am-11am',
  '11am-12pm',
  '12pm-1pm',
  '1pm-2pm',
  '2pm-3pm',
  '3pm-4pm',
  '4pm-5pm',
  '5pm-6pm',
  '6pm-7pm',
  '7pm-8pm',
  '8pm-9pm',
  '9pm-10pm',
  '10pm-11pm',
  '11pm-12am',
]

class TimeSlotSelector extends React.Component {
  state = {
    reserved: [],
  }

  _onPress = (time) => {
    Alert.alert(
      'Reservation Information',
      `\n Do you want to reserve the court for ${time}?`,
      [
        {
          text: 'Reserve',
          onPress: () => {
            reserve(
              this.props.username,
              this.props.court,
              this.props.date,
              time
            )
          },
        },
        {
          text: 'Exit',
        },
      ]
    )
  }

  updateProps = () => {
    loadAllReservationsInDate(this.props.court.key, this.props.date).on(
      'value',
      (snapshot) => {
        let data = snapshot.val()
        if (data) {
          let keys = Object.keys(data)
          let temp = []
          for (let i = 0; i < keys.length; i++) {
            temp.push(keys[i])
          }
          this.setState({ reserved: temp })
        } else {
          this.setState({ reserved: [] })
        }
      }
    )
  }

  componentDidMount() {
    this.updateProps()
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.updateProps()
    }
  }

  render() {
    {
      var myloop = []
      for (let i = 0; i < 6; i++) {
        myloop.push(
          <View
            style={{ flexDirection: 'row', justifyContent: 'center' }}
            key={i}
          >
            <ButtonReserve
              onPress={() => this._onPress(timeSlot[i * 3])}
              mode={'outlined'}
              style={styles.timeBtn}
              disabled={this.state.reserved.includes(timeSlot[i * 3])}
            >
              {timeSlot[i * 3]}
            </ButtonReserve>
            <ButtonReserve
              onPress={() => this._onPress(timeSlot[i * 3 + 1])}
              mode={'outlined'}
              style={styles.timeBtn}
              disabled={this.state.reserved.includes(timeSlot[i * 3 + 1])}
            >
              {timeSlot[i * 3 + 1]}
            </ButtonReserve>
            <ButtonReserve
              onPress={() => this._onPress(timeSlot[i * 3 + 2])}
              mode={'outlined'}
              style={styles.timeBtn}
              disabled={this.state.reserved.includes(timeSlot[i * 3 + 2])}
            >
              {timeSlot[i * 3 + 2]}
            </ButtonReserve>
          </View>
        )
      }
    }
    return <View>{myloop}</View>
  }
}

const styles = StyleSheet.create({
  timeBtn: {
    width: 112,
    height: 45,
    marginLeft: 5,
  },
})

export default TimeSlotSelector
