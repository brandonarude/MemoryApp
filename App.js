import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
} from 'react-native'
import {findDate} from './src/Components/Atoms/findDate.js'
import {incrementDayCounter} from './src/Components/Atoms/incrementDayCounter.js'

function RetrievePassage(props){
  return(
    <Text>
      {props.day}
    </Text>
  );
}

class Hello extends Component {


  render() {
    let thing = 5000000;
    let fullDate = findDate();
    let newDay = incrementDayCounter(fullDate);
    return (
      <View>

        <RetrievePassage day={newDay} />
      </View>

    )
  }
}



export default Hello;
