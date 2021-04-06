import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, StyleSheet, Alert} from 'react-native';
import TimePicker from '../InsideComponents/TimePicker';
import TimeSlotSelector from '../InsideComponents/TimeSlotSelector';

class IndiCourtPage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <View style={styles.container}>
                {/* court information */}
                <View style={styles.basicInfor}>
                    <Text style={{fontWeight: 'bold', fontSize: 25, marginBottom: 15}}>Willard Park Tennis Courts</Text>
                    <Text style={{fontSize: 20, marginBottom: 15}}>2500 Derby St, Berkeley, CA 94705</Text>
                </View>
                
                <View style={styles.registerSession}>
                    <TimePicker style={styles.dateSession}/>
                    <View style={styles.selectionSession}>
                        <TimeSlotSelector/>
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
        marginTop: 150,
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