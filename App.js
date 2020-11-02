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
  {/*const load = async () => {
    try {
      let thing = await AsyncStorage.getItem("MyName");
      if(thing!== null){
        this.setState({date: thing});
      } else {
        this.setState({date: "Something's gone wrong"});
      }
    } catch {
      alert("Something went wrong with loading the data");
    }
  }*/}


    let loadedDate = retrieveStoredDate();
    loadedDate.then(loadedDate => this.setState({date: loadedDate}));
}

render(){
    return(
      <View style={styles.container}>
      <Text style={styles.title}>
      {this.state.date}
      </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  }
});

export default Hello;
