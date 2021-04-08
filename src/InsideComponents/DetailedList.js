import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native';

const courts = [
  {
    name: 'First Court'
  },
  {
    name: 'Second Court'
  },
  {
    name: 'Third Court'
  },
  {
    name: 'Fourth Court'
  },
  {
    name: 'Fifth Court'
  },
  {
    name: 'Sixth Court'
  },
  {
    name: 'Seventh Court'
  },
  {
    name: 'Eighth Court'
  },
];

export default class DetailedList extends Component {

  constructor() {
    super();
    this.state = {
      source: courts,
    }
  }

  renderItem({item}) {
    return (
      <View style={ styles.row }>
        <Text style={ styles.text }>
          { item.name }
        </Text>
      </View>
    )
  }

  render() {
    return (
        <ScrollView
        ref={ ref => this.scrollView = ref }
        onContentSizeChange={ (contentWidth, contentHeight) => {
                                console.log('Hieght: ' + contentHeight + 'Width: ' + contentWidth)
                              } }
        onScroll={ () => console.log('You are scrolling') }
        pagingEnabled={ true }>
        <FlatList
                style={ styles.container }
                data={ this.state.source }
                renderItem={ this.renderItem }
                keyExtractor={ item => item.name } />
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
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
  }
})