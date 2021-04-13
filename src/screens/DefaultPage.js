import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import TopMenu from '../InsideComponents/TopMenu'
import DetailedList from '../InsideComponents/DetailedList'

export default class DefaultPage extends Component {
  render() {
    const { username } = this.props.route.params
    return (
      <View style={styles.container}>
        <View style={styles.reservInfo}>
          <TopMenu username={username} />
        </View>
        <View style={styles.rankSession}>
          <DetailedList
            username={username}
            navigation={this.props.navigation}
          />
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
    flex: 2.9,
  },
  rankSession: {
    flex: 8.6,
    alignItems: 'center',
  },
  filterSession: {
    flex: 0.6,
    zIndex: 1,
    alignItems: 'center',
  },
})
