import React, { Component } from 'react'
import { TouchableHighlight } from 'react-native'
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native'
import ButtonReserve from '../components/ButtonReserve'

import { loadAllCourts } from '../service/serviceInterface'

export default class DetailedList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: [],
      username: this.props.username,
    }
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text
          style={styles.text}
          onPress={() => {
            this.props.navigation.navigate('Individual', {
              username: this.state.username,
              court: {
                key: item.key,
                name: item.value.name,
                address: item.value.address,
              },
            })
          }}
        >
          {item.value.name}
          {item.value.address}
          {item.value.ratings}
          {item.key}
        </Text>
      </View>
    )
  }

  componentDidMount() {
    loadAllCourts().on('value', (snapshot) => {
      let data = snapshot.val()
      if (data) {
        let keys = Object.keys(data)
        let values = Object.values(data)
        let temp = []
        for (let i = 0; i < keys.length; i++) {
          temp.push({
            key: keys[i],
            value: values[i],
          })
        }
        this.setState({ source: temp })
      } else {
        this.setState({ source: [] })
      }
    })
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView ref={(ref) => (this.scrollView = ref)} pagingEnabled={true}>
        <FlatList
          style={styles.container}
          data={this.state.source}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.key}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  row: {
    width: 390,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    marginBottom: 3,
  },
  text: {
    marginTop: 40,
    alignItems: 'center',
    color: 'black',
  },
  timeBtn: {
    width: 112,
    height: 45,
    marginLeft: 5,
  },
})
