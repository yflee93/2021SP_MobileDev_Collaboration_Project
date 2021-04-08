
import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert, TouchableOpacity} from 'react-native';

export default class TopMenu extends Component {

  checkinPress() {
    Alert.alert('Confirm', 'Check-in for your reservation', [
      {
        text: 'Check-in',
        onPress: () => Alert.alert('Success', 'You have checked-in.                      Enjoy your time!', [
          {
            text: 'Ok',
            onPress: () => console.log('Pressed OK')
          },
        ])
      },
      {
        text: 'Cancel',
        onPress: () => console.log('You canceled')
      },
    ]);
  }

  checkoutPress() {
    Alert.alert('Confirm', 'Check-out for your reservation', [
      {
        text: 'Check-out',
        onPress: () => Alert.alert('Success', 'You have checked-out.                    Have a nice day!', [
          {
            text: 'Ok',
            onPress: () => console.log('Pressed OK')
          },
        ])
      },
      {
        text: 'Cancel',
        onPress: () => console.log('You canceled')
      },
    ]);
  }

  cancelPress() {
    Alert.alert('Confirm', 'Do you want to cancel your reservation?', [
      {
        text: 'Yes',
        onPress: () => Alert.alert('Success', 'You have canceled your reservation. See you next time!', [
          {
            text: 'Ok',
            onPress: () => console.log('Pressed OK')
          },
        ])
      },
      {
        text: 'No',
        onPress: () => console.log('You canceled')
      },
    ]);
  }

  render () {
    return (
    <View>
      <Text style={styles.sectionHeadingStyle}>
              Reservation Menu
      </Text>
            <View style = {styles.appButtonSection}>
                <TouchableOpacity 
                    style = {styles.appButtonContainer}
                    onPress={ this.checkinPress }
                >
                  <Text style = {styles.appButtonText}> Check-In </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.appButtonContainer}
                    onPress={ this.checkoutPress }
                >
                  <Text style = {styles.appButtonText}> Check-Out </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.appButtonContainer}
                    onPress={ this.cancelPress }
                >
                  <Text style = {styles.appButtonText}> Cancellation </Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionHeadingStyle: {
    flex: 1,
    fontSize: 22,
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
    color: "white",
    alignSelf: "center",
    textTransform: "uppercase",
}
});