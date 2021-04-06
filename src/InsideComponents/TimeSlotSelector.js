import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, StyleSheet, Alert} from 'react-native';
// import { Button } from 'react-native-elements';
import ButtonReserve from '../components/ButtonReserve'

const timeSlot = ["6am-7am", "7am-8am", "8am-9am", "9am-10am", "10am-11am", "11am-12pm", "12pm-1pm", "1pm-2pm",
"2pm-3pm", "3pm-4pm", "4pm-5pm", "5pm-6pm", "6pm-7pm", "7pm-8pm", "8pm-9pm", "9pm-10pm", "10pm-11pm", "11pm-12am"]

class TimeSlotSelector extends React.Component {
    constructor() {
        super();
        this.state = {
            disable: false,
            selectedTimes: [],
            selectedTime: ''
        }
    }
    
    _onPress = (time) => {
        Alert.alert('Reservation Information', `\n Do you want to researve the court for ${time}?`, [
            {
                text: 'Researve',
                onPress: () => {
                    this.state.selectedTimes.push(time)
                    this.state.disable = true
                    this.state.selectedTime = time
                    this.setState(this.state)
                    console.log(this.state.selectedTimes)
            }},
            {
                text: 'Cancel',
                onPress: () => {
                    this.state.selectedTimes = this.state.selectedTimes.filter((selectTime) => selectTime !== time)
                    this.state.disable = true
                    this.state.selectedTime = ''
                    this.setState(this.state)
                }
            },
            {
                text: 'Exit'
            }
        ])
    }


    render() {
        {
            var myloop = []
            for(let i = 0; i < 6; i++) {
                
                myloop.push(
                    <View style={{flexDirection: 'row', justifyContent: 'center',}}>
                        {/* {() => this.innerLoop(i)} */}
                        <ButtonReserve
                            onPress={() => this._onPress(timeSlot[i * 3])}
                            mode={this.state.disable && (this.state.selectedTimes.includes(timeSlot[i * 3]) || this.state.selectedTime === timeSlot[i * 3])? 'contained' : 'outlined'}
                            style={styles.timeBtn}
                            >
                            {timeSlot[i * 3]}
                        </ButtonReserve>
                        <ButtonReserve
                            mode={this.state.disable && (this.state.selectedTimes.includes(timeSlot[i * 3 + 1]) || this.state.selectedTime === timeSlot[i * 3 + 1])? 'contained' : 'outlined'}
                            onPress={() => this._onPress(timeSlot[i * 3 + 1])}
                            style={styles.timeBtn}
                            >
                            {timeSlot[i * 3 + 1]}
                        </ButtonReserve>
                        <ButtonReserve
                            mode={this.state.disable && (this.state.selectedTimes.includes(timeSlot[i * 3 + 2]) || this.state.selectedTime === timeSlot[i * 3 + 2])? 'contained' : 'outlined'}
                            onPress={() => this._onPress(timeSlot[i * 3 + 2])}
                            style={styles.timeBtn}
                            >
                            {timeSlot[i * 3 + 2]}
                        </ButtonReserve>
                    </View>)
            }
        } 
        return(
            <View>
                {/* <Text>{this.state.selectedTime}</Text> */}
                {myloop}
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    timeBtn:{
        width:112, 
        height:45, 
        marginLeft: 5
    },
  });

export default TimeSlotSelector;