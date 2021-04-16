import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native'
import DropdownMenu from 'react-native-dropdown-menu'

import { loadAllCourts } from '../service/serviceInterface'

export default class DetailedList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      source: [],
      username: this.props.username,
      text: '',
      sorted: [],
      temp: [],
    }
  }

  filterRankings = (filterChoice) => {
    this.state.temp = []

    if (filterChoice === 'Location') {
      this.state.sorted = this.state.source
    } else if (filterChoice === 'San Francisco') {
      for (let i = 0; i < this.state.source.length; i++) {
        if (this.state.source[i].value.location === filterChoice) {
          this.state.temp.push({
            key: this.state.source[i].key,
            value: this.state.source[i].value,
          })
        }
      }
    } else if (filterChoice === 'San Jose') {
      for (let i = 0; i < this.state.source.length; i++) {
        if (this.state.source[i].value.location === filterChoice) {
          this.state.temp.push({
            key: this.state.source[i].key,
            value: this.state.source[i].value,
          })
        }
      }
    } else if (filterChoice === 'Others') {
      for (let i = 0; i < this.state.source.length; i++) {
        if (this.state.source[i].value.location === filterChoice) {
          this.state.temp.push({
            key: this.state.source[i].key,
            value: this.state.source[i].value,
          })
        }
      }
    }

    if (this.state.temp.length !== 0) {
        this.state.sorted = this.state.temp
    } else {
      this.state.sorted = this.state.sorted
    }

    //test if rank-by would return ranking based on rank
    //test if location + ratings would work
    if (filterChoice === 'Rank By') {
      this.state.sorted = this.state.sorted.sort(function (a, b) {
        return b.value.rank - a.value.rank
      })
    } else if (filterChoice === 'Ratings') {
      this.state.sorted = this.state.sorted.sort(function (a, b) {
        return b.value.ratings - a.value.ratings
      })
    } else if (filterChoice === 'Popularity') {
      this.state.sorted = this.state.sorted.sort(function (a, b) {
        return b.value.popularity - a.value.popularity
      })
    } else if (filterChoice === 'Maintainence') {
      this.state.sorted = this.state.sorted.sort(function (a, b) {
        return b.value.maintainence - a.value.maintainence
      })
    }
  }

  renderItem = ({ item }) => {
    return (
      <View style={{width: 380, alignItems: 'center'}}>
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
          {item.value.name}, 
          {item.value.address} || r: {item.value.ratings} || p:{' '}
          {item.value.popularity} || m: {item.value.maintainence} || #:{' '}
          {item.value.rank}
        </Text>
      </View>
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
        //apply rank sort
        temp = temp.sort(function (a, b) {
          return b.value.rank - a.value.rank
        })
        this.setState({ source: temp, sorted: temp })
      } else {
        this.setState({ source: [] })
      }
    })
  }

  render() {
    const { navigation } = this.props
    var data = [
      ['Location', 'San Francisco', 'San Jose', 'Others'],
      ['Rank By', 'Ratings', 'Popularity', 'Maintainence'],
    ]
    return (
      <View>
        <View style={styles.filterSession}>
          <DropdownMenu
            style={{ flex: 0.5 }}
            bgColor={'#FF9E00'}
            tintColor={'black'}
            activityTintColor={'grey'}
            handler={(selection, row) =>
              this.setState({ text: data[selection][row] })
            }
            data={data}
            onPress={this.filterRankings(this.state.text)}
          ></DropdownMenu>
        </View>
        <View style={styles.rankSession}>
          <ScrollView
            ref={(ref) => (this.scrollView = ref)}
            pagingEnabled={true}
          >
            <FlatList
              style={styles.container}
              data={this.state.sorted}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.key}
            />
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FF9E00',
  },
  row: {
    width: 350,
    height: 100,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 7,
    padding:5
  },
  text: {
    marginTop: 25,
    alignItems: 'center',
    color: 'black',
  },
  timeBtn: {
    width: 112,
    height: 45,
    marginLeft: 5,
  },
  rankSession: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterSession: {
    flexDirection: 'row',
    zIndex: 1,
    alignItems: 'center',
  },
})
