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
  const [dayIndex, setDayIndex] = useState('');

  // Load Date of last use
  let storedDate = RetrieveStoredData("MyStoredDate");

  //  After Date of last use is loaded, figure out if the current day is different
  //  If so, increment the day index and save both.
 storedDate.then( (storedDate) => {
    let storedDateIndex = RetrieveStoredData("MyStoredDayIndex");
    storedDateIndex.then( (storedDateIndex) => {
      // Retrieve and format current date
      const unformattedCurrentDate = FindDate();
      let currentDate = unformattedCurrentDate[0].toString() +
                          unformattedCurrentDate[1].toString() +
                          unformattedCurrentDate[2].toString();

        if(storedDateIndex === "") {
          storedDateIndex = "1";
        }
        currentDate = '01123'
        if(currentDate != storedDate){
          storedDateIndex = Number(storedDateIndex) + 1;

          if(storedDateIndex >= 32){
            storedDateIndex = 1;
          }

          SaveAsyncData("MyStoredDate", currentDate);
          SaveAsyncData("MyStoredDayIndex", storedDateIndex.toString());
          setDayIndex(storedDateIndex);

        } else if(dayIndex == "") {
          setDayIndex(storedDateIndex);
        }

    });
  });


  const provider = {
    dayIndex,
  };
    return <DayContext.Provider value={provider}>{children}</DayContext.Provider>;
}
