import AsyncStorage from '@react-native-async-storage/async-storage';

const getList = async () => {


  try {
    const jsonValue = await AsyncStorage.getItem('@store_items');
   const itemsList = (jsonValue != null ? JSON.parse(jsonValue) : null);
    return itemsList;
  } catch(e) {
    // error reading value
  }
}

export default getList;