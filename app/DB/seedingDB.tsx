import AsyncStorage from '@react-native-async-storage/async-storage';


const seedDB = () => {
  const items = [
    {"id": "1", "name": "drawer", "qty": 1, "price": 100},
    {"id": "2", "name": "table", "qty": 1, "price": 120},
    {"id": "3", "name": "sofa", "qty": 1, "price": 140},
    {"id": "4", "name": "rug", "qty": 1, "price": 160},
    {"id": "5", "name": "cushion", "qty": 1, "price": 180},
    {"id": "6", "name": "chair", "qty": 1, "price": 200},
    {"id": "7", "name": "bookshelf", "qty": 1, "price": 220},
    {"id": "8", "name": "lamp", "qty": 1, "price": 240},
    {"id": "9", "name": "mirror", "qty": 1, "price": 260},
    {"id": "12", "name": "vase", "qty": 1, "price": 280},
    {"id": "13", "name": "clock", "qty": 1, "price": 300},
    {"id": "14", "name": "bed", "qty": 1, "price": 320},
    {"id": "15", "name": "shelf", "qty": 1, "price": 340},
    {"id": "16", "name": "painting", "qty": 1, "price": 360},
    {"id": "17", "name": "stool", "qty": 1, "price": 380},
    {"id": "18", "name": "desk", "qty": 1, "price": 400},
    {"id": "19", "name": "cabinet", "qty": 1, "price": 420},
    {"id": "20", "name": "plant", "qty": 1, "price": 440},
    {"id": "21", "name": "basket", "qty": 1, "price": 460},
    {"id": "22", "name": "curtain", "qty": 1, "price": 480}
  ];
  const storeData = async (items: Array<{ id: string, name: string, qty: number, price: number }>) => {
    try {
      const jsonValue = JSON.stringify(items);
      await AsyncStorage.setItem('@store_items', jsonValue);
    } catch (e) {
      // saving error
    }
  };
    storeData(items);
};

export default seedDB;
