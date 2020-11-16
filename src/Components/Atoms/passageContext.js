import React, { Component, useState } from "react";
import { AsyncStorage, Alert } from 'react-native';
import RetrieveStoredData from './retrieveStoredData.js';
import FindDate from './findDate.js';
import SaveAsyncData from './saveAsyncData.js';

//  Creates Day Context
export const DayContext = React.createContext({
  dayIndex: '1',
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


// Created Provider function for dayContext
export default function DayContextProvider({children}) {

  //  Instantiate dayIndex Context State
  const [selectedIndex, setSelectedIndex] = useState('');

  const provider = {
    selectedIndex,
    changeLang: selected => {
      const selectedPassage = selected ? selected : '1'
      setSelectedIndex(selected);
    }
  };
    return <DayContext.Provider value={provider}>{children}</DayContext.Provider>;
}
