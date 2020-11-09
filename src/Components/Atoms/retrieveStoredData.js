// Stored Data Includes:
// MyStoredDate, MyStoredDayIndex for use in DayContext
// MyLang for use in LanguageContext

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export default async function retrieveStoredData(itemToLoad) {

  try {
    let value = await AsyncStorage.getItem(itemToLoad);
    if(value !== null) {
      return value;
    } else {
      return "";
    }
  } catch {
    alert("err");
  }
}
