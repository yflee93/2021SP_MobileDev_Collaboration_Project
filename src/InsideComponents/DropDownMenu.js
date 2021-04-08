import React, { Component } from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import { View, Text } from "react-native";

export default class DropDownMenu extends Component {
constructor(props) {
    super(props);
    this.state = {
        text: ''
    };
}
render() {
    var data = [["Location", "San Francisco", "San Jose", "Others"], 
                ["Sports Tyle", "Tennis","Fitness"],
                ["Time Slots", "All", "Availiable"]];
    return (
        <View style = {{flexDirection: 'row'}}>
            <DropdownMenu
                style={{flex: 0.5}}
                bgColor={'orange'}
                tintColor={'black'}
                activityTintColor={'grey'}
                handler={(selection, row) => this.setState({text: data[selection][row]})}
                data={data}
            >
            </DropdownMenu>
        </View>

);
}
}