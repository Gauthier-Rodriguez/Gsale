import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext'

const ExploreHeader = () => {
const {search, setSearch} = useContext(SearchContext);





  return (
    <SafeAreaView style={{flex : 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="search" size={24}/>
          </TouchableOpacity>
          <TextInput
            keyboardType='numeric'
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={e => {setSearch(e)}}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  padding:10,
    backgroundColor: '#fff',
    height: 75,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 16

  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  searchBtn: {
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8
  }
});

export default ExploreHeader;