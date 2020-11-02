import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export async function retrieveStoredDate() {

  try {
    let value = await AsyncStorage.getItem("MyName");
    if(value !== null) {
      console.log("In RetrieveStoredDate");
      return value;
    }
  } catch {
    alert("err");
  }
}

export default retrieveStoredDate;
