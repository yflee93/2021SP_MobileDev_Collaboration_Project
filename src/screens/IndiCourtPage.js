import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, StyleSheet, Alert} from 'react-native';
import TimePicker from '../InsideComponents/TimePicker';
import TimeSlotSelector from '../InsideComponents/TimeSlotSelector';

class IndiCourtPage extends React.Component {
    state = {
        courtName: 'Willard Park Tennis Courts',
        courtLocation: '2500 Derby St, Berkeley, CA 94705',
    }

    render() {
        const { username } = this.props.route.params
        return(
            <View style={styles.container}>
                {/* court information */}
                <View style={styles.basicInfor}>
                    <Text style={{fontWeight: 'bold', fontSize: 25, marginBottom: 15}}>{this.state.courtName}</Text>
                    <Text style={{fontSize: 20, marginBottom: 15}}>{this.state.courtLocation}</Text>
                </View>
                
                <View style={styles.registerSession}>
                    <TimePicker style={styles.dateSession}/>
                    <View style={styles.selectionSession}>
                        <TimeSlotSelector court={this.state.courtName} username={username}/>
                    </View>
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
        flex: 9,
        alignItems: 'center',
    },
    dateSession: {
        flex: 2,
        alignItems: 'center'
    },
    selectionSession: {
        flex: 7,
        marginTop:25,
        alignItems: 'center',

    },
  });

export default IndiCourtPage;