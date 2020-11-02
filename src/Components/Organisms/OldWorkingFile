import 'react-native-gesture-handler';
import React, { useState, useEffect, Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert
} from 'react-native'
import {findDate} from './src/Components/Atoms/findDate.js'
import {incrementDayCounter} from './src/Components/Atoms/incrementDayCounter.js'
import {retrieveStoredDate} from './src/Components/Atoms/retrieveStoredDate.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {save} from './src/Components/Atoms/saveAsyncData.js'
import {LinearGradient} from 'expo-linear-gradient';

class Hello extends Component {
constructor(props){
  super(props);
  this.state = {
    date: "",
    saved: ""
  };

  let dataToSave = "Test Again";

  save(dataToSave);
}

componentDidMount() {
    let loadedDate = retrieveStoredDate();
    loadedDate.then(loadedDate => this.setState({date: loadedDate}));
}

render(){
    return(
      <LinearGradient start={[.6,0]} colors={['#d500ff', '#6306aa', '#340979']} style={styles.container}>
      <Text style={styles.title}>
      {this.state.date}
      </Text>
      </LinearGradient>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
  }
});

export default Hello;
