import React, { useContext } from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, ScrollView, Animated, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import seedDB from '@/app/DB/seedingDB';
import getList from '@/utils/getList';
import ItemList from '@/app/DB/itemList';
import { SearchContext } from '../context/SearchContext';  
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';

const Listings = () => {
  const {search, setSearch} = useContext(SearchContext);
  const [items, setItems] = useState(
    ItemList.map((item, index) => ({
      key: `${index}`,
      id: item.id,
      name: item.name,
      qty: item.qty,
      price: item.price,
    }))
    );

  const [searchedItems, setSearchedItems] = useState([]);

  /* useEffect(() => {
    seedDB();
    getList().then((data) => {
      setItems(data);
    });
  }, []); */



   const searchItem = (search: string) => {
  const foundItem = items.find(item => item.id === search);
  foundItem && setSearchedItems([foundItem]);
  }

  useEffect(() => {
    searchItem(search);
  } , [search]); 


  const closeRow = (rowMap :any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap :any, rowKey: any) => {
    closeRow(rowMap, rowKey);
    setSearch('');
    const newData = [...items];
    const prevIndex = items.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setItems(newData);
  };

  const decrementQty = (rowMap :any, rowKey: any) => {
    closeRow(rowMap, rowKey);
    const newData = [...items];
    const prevIndex = items.findIndex(item => item.key === rowKey);
    newData[prevIndex].qty -= 1;
    if (newData[prevIndex].qty === 0) {
      newData.splice(prevIndex, 1);
    }
    setItems(newData);
  }

  interface Item {
    key: string;
    id: string;
    name: string;
    qty: number;
    price: number;
  }

  interface VisibleItemProps {
    data: { item: Item };
  }

  const VisibleItem: React.FC<VisibleItemProps> = (props) => {
    const { data } = props;

    return (
      <TouchableHighlight>
        <View style={styles.items}>
          <Text>{data.item.id}</Text>
          <Text>{data.item.name}</Text>
          <Text>{data.item.qty}</Text>
          <Text>{data.item.price} €</Text>
        </View>
      </TouchableHighlight>
    );
  };

  const renderItem = (data : any, rowMap: any) => {
    return <VisibleItem data={data} />
    
  };
  
interface HiddenItemWithActionsProps {
  onClose: () => void;
  onDelete: () => void;
  decrementQty: () => void;
}

const HiddenItemWithActions: React.FC<HiddenItemWithActionsProps> = (props) => {
  const { onClose, onDelete, decrementQty } = props;

  return (
    <TouchableOpacity style={styles.rowBack} onPress={decrementQty}>
      <Ionicons name="remove-circle-outline" size={32}></Ionicons>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={onClose}>
      
        <Ionicons name="close-circle-outline" size={32} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={onDelete}
      >
        <Ionicons name="trash-outline" size={32} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
  const renderHiddenItem = (data : any, rowMap : any) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap} 
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
        decrementQty={() => decrementQty(rowMap, data.item.key)}
      />
    )
  };


  return(
    <>
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>ID</Text>
        <Text>NOM</Text>
        <Text>Quantité</Text>
        <Text>PRIX</Text>
      </View>
        <SwipeListView style={styles.list}
          data={search ? searchedItems : items}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-145}
          />
          
    </View>
    <View style={styles.total}>
        <Text>Total : {items.length}</Text>
            
    </View>
    </>
  ) 
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: '80%',
    backgroundColor: '#eee',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  list: {
    height: '100%',
  },
  items: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '96%',
    backgroundColor: '#fff',
    borderRadius: 10,
   margin: 10,
  },
  rowBack: {
    flexGrow: 1,
    backgroundColor: '#9F89FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingTop: 12,
    width: '96%',
    borderRadius: 10,
    margin: 10,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#00B979',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#FF7070',
    right: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  total:{
    padding: 20,
  }
});

export default Listings;

