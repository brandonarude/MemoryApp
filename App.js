import React, { useState, useEffect, Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  AsyncStorage
} from 'react-native'
import {findDate} from './src/Components/Atoms/findDate.js'
import {incrementDayCounter} from './src/Components/Atoms/incrementDayCounter.js'
import {retrieveStoredDate} from './src/Components/Atoms/retrieveStoredDate.js'
//import AsyncStorage from '@react-native-async-storage/async-storage';

function RetrievePassage(props){
  return(
    <Text>
      {props.day}
    </Text>
  );
}


{/*export default function App() {

  const [name, setName] = useState();

  const load = async () =>{
    try {
      let value = await AsyncStorage.getItem("MyName");
      if(value !== null) {
        return value;
      }
    } catch {
      alert(err);
    }
  }

  const save = async () => {
    try{
      await AsyncStorage.setItem("MyName", "2020");

    } catch {
      alert(err)
    }
  }
  useEffect(() => {
    save()
  })

  setName(useEffect(()=> {
    load();
  }));


  return (
    <View>
      <Text>
      {  name }
      </Text>
    </View>

  )

}*/}

class Hello extends Component {
constructor(props){
  super(props);
  var thing = 10000;
  this.state = {
    day: ""
  };




}


  render() {
    const load = async () =>{
      try {
        let value = await AsyncStorage.getItem("MyName");
        if(value !== null) {
          this.setState({day: value});
        }
      } catch {
        alert(err);
      }
    }

    
    load();

    let fullDate = findDate();
    let newDay = incrementDayCounter(fullDate);
    return (
      <View>

        <RetrievePassage day={this.state.day} />
      </View>

    )

  }
}



export default Hello;
