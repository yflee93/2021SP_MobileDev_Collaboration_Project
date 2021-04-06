import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';

import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

class TimePicker extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
            chosenDate: ''
        }
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM Do YYYY')
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    render() {
        return(
            <View>
                <Text style={styles.timeText}>
                    {this.state.chosenDate}
                </Text>

                <TouchableOpacity style={styles.button}
                    onPress={this.showPicker}>
                        <Text style={styles.text}>Select A Date</Text>
                </TouchableOpacity>
                <Text style={styles.textWarning}>Warning: we are only allow to register within 7 days</Text>
                <Text style={styles.textWarning}>since today!</Text>
                <DateTimePicker
                    isVisible = {this.state.isVisible}
                    onConfirm = {this.handlePicker}
                    onCancel = {this.hidePicker}
                    // minimumDate={new Date(2021, 4, 1)}
                    // maximumDate={new Date(2021, 4, 8)}
                    />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    button: {
        width: 250,
        height: 50,
        backgroundColor: '#3c096c',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 15,
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    timeText: {
        color: '#ff6d00',
        fontSize:18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textWarning: {
        fontSize:10,
        // textAlign: 'center',
        marginTop: 3,
        // justifyContent: 'center'
    }
});

export default TimePicker;