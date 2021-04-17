import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, FlatList, StyleSheet, Alert } from 'react-native'
import TimePicker from '../InsideComponents/TimePicker'
import TimeSlotSelector from '../InsideComponents/TimeSlotSelector'

class IndiCourtPage extends React.Component {
  render() {
    const { username, court } = this.props.route.params
    return (
      <View style={styles.container}>
        {/* court information */}
        <View style={styles.basicInfor}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10,fontFamily: 'American Typewriter', textAlign: 'center', marginLeft: 10,  marginRight: 10}}>
            {court.name}
          </Text>
          <Text style={{ fontSize: 20, marginBottom: 10, fontFamily: 'American Typewriter', textAlign: 'center', marginLeft: 10,  marginRight: 10}}>
            {court.address}
          </Text>
          <Text style={{ fontSize: 15, marginBottom: 10, fontFamily: 'American Typewriter', textAlign: 'center'}}>
            Rating: {court.rating}  Popularity: {court.popularity}  Maintainence: {court.maintain}
          </Text>
        </View>

        <View style={styles.registerSession}>
          <TimePicker court={court} username={username}/>
          {/* <View style={styles.selectionSession}>
            <TimeSlotSelector court={court} username={username} />
          </View> */}
        </View>
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
  basicInfor: {
    flex: 2,
    marginTop: 50,
  },
  registerSession: {
    flex: 10,
    alignItems: 'center',
  },
})

export default IndiCourtPage
