import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export async function retrieveStoredDate() {

    const load = async () =>{
      try {
        let value = await AsyncStorage.getItem("MyName");
        if(value !== null) {
          alert("here1");
          return value;
        }
      } catch {
        alert("err");
      }
    }

    const save = async () => {
      try{
        await AsyncStorage.setItem("MyName", "2020");
        alert("here");
      } catch {
        alert("err")
      }
    }
       save()
      let name =  load();

return name;


  }
