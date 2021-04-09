import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TopMenu from '../InsideComponents/TopMenu'
import DropDownMenu from '../InsideComponents/DropDownMenu'
import DetailedList from '../InsideComponents/DetailedList'

export default class DefaultPage extends Component {
  render() {
    const { username } = this.props.route.params
    return (
      <View style={styles.container}>
        <View style={styles.reservInfo}>
          <TopMenu username={username} />
        </View>
        <View style={styles.filterSession}>
          <DropDownMenu/>
        </View>
        <View style={styles.rankSession}>
          <DetailedList username={username} navigation={this.props.navigation}/>
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
  reservInfo: {
    flex: 1.5,
    // marginTop: 70,
    marginBottom: 30,
  },
  rankSession: {
    flex: 8,
    alignItems: 'center',
  },
  filterSession: {
    flex: 0.6,
    zIndex: 1,
    alignItems: 'center',
  },
})
