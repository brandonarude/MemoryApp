import React, { Component, useState } from "react";
import { AsyncStorage, Alert } from 'react-native';
import RetrieveStoredDate from './retrieveStoredData.js';
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

  // Retrieve and format current date
  const unformattedCurrentDate = FindDate();
  const currentDate = unformattedCurrentDate[0] + unformattedCurrentDate[1] + unformattedCurrentDate[2]

  //  Instantiate dayIndex Context State
  const [dayIndex, setDayIndex] = useState('1');

  // Load Date of last use
  const storedDate = RetrieveStoredData("MyStoredDate");

  //  After Date of last use is loaded, figure out if the current day is different
  //  If so, increment the day index and save both.
  storedDate.then( (storedDate) => {
    storedDateIndex = RetrieveStoredData("MyStoredDayIndex");
    storedDateIndex.then( (storedDateIndex) => {
        if(storedDateIndex === "") {
          storedDateIndex = "1";
        }
        if(currentDate != storedDate){
          storedDateIndex = storedDateIndex + 1;
          setDayIndex(storedDateIndex);
          saveAsyncData("MyStoredDate", currentDate);
          saveAsyncData("MyStoredDayIndex");
        }
    });
  });

  const provider = {
    dayIndex,
  };
    return <DayContext.Provider value={provider}>{children}</LanguageContext.Provider>;
}
