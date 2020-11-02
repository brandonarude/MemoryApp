import AsyncStorage from '@react-native-async-storage/async-storage';

export async function save(dataToSave) {
  try{
    await AsyncStorage.setItem("MyName", dataToSave);
  } catch {
    alert("Something has gone wrong with saving the data.");
  }
}

export default save;
