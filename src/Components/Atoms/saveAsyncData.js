import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function SaveAsyncData(dataName, dataToSave) {
  try{
    await AsyncStorage.setItem(dataName, dataToSave);
  } catch {
    alert("Something has gone wrong with saving the data.");
  }
}
