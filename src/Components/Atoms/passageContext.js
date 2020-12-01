import React, { Component, useState } from "react";
import { AsyncStorage, Alert } from 'react-native';
import RetrieveStoredData from './retrieveStoredData.js';
import FindDate from './findDate.js';
import SaveAsyncData from './saveAsyncData.js';

//  Creates Day Context
export const PassageContext = React.createContext({
  selectedIndex: '1',
});

//  CurrentDate
//  storedDate
//  DateIndex (1-31)

//  Retrieve storedDate ("MyStoredDate"), storedDayIndex ("MyStoredDayIndex")
//  compare storedDate with presentDate
//  if different, increase DayIndex (if dayIndex >31, set dayIndex to 1)
//  if not different, leave DayIndex unchanged
//  save currentDate, DayIndex to storedDate, storedDayIndex via AsyncStorage
//  return dateIndex


// Created Provider function for PassageContext
export default function PassageContextProvider({children}) {

  //  Instantiate selectedIndex Context State
  const [selectedIndex, setSelectedIndex] = useState('');

  const provider = {
    selectedIndex,
    changeSelected: selected => {
      const selectedPassage = selected ? selected : '1'
      setSelectedIndex(selected);
    }
  };
    return <PassageContext.Provider value={provider}>{children}</PassageContext.Provider>;
}
