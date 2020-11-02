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

class Hello extends Component {
constructor(props){
  super(props);
  this.state = {
    date: "",
  };

  let dataToSave = "Trying out a variable";

  const save = async (dataToSave) => {
    try{
      await AsyncStorage.setItem("MyName", dataToSave);
    } catch {
      alert("Something has gone wrong with saving the data.");
    }
  }
  save(dataToSave);
}

componentDidMount() {



  const load = async () => {
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
  }


    load();
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
  },
  title: {
    fontSize: 30,
  }
});

export default Hello;
