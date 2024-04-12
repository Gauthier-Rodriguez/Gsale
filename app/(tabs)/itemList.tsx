import { View, Text } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import seedDB from "../DB/seedingDB";


const getList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@store_items');
    console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}



const _layout = () => {
  return (
    <View>
      <Text>Coucou</Text>
    </View>
  );
}

export default _layout;