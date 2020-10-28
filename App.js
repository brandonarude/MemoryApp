import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import {findDate} from './src/Components/Atoms/findDate.js'

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
    return (
      <View>
        <RetrievePassage day={fullDate[1]} />
      </View>

    )
  }
}



export default Hello;
