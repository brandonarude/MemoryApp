import {findDate} from "./findDate.js"
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function retrieveStoredDate() {
return "Hello";
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        return "Hello";
      } else {
        return "Hello";
      }
    } catch(e) {

    }
    return "Hello";
}
