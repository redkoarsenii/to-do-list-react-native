import React, {useState} from 'react';
import {View, FlatList, ScrollView } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {text: "buy milk", key: '1'},
    {text: "buy wheat", key: '2'},
    {text: "buy eggs", key: '3'},
    {text: "buy butter", key: '4'}
  ]);

  const addHandler = (text) => {
      setListOfItems((list) => {
          return [
              {text: text, key: Math.random().toString(36).substring(7)},
              ...list
          ]
      })
      console.log("task added")
  }

  const deleteHandler = (key) => {
      setListOfItems((list) => {
          console.log("task removed")
          return list.filter(listOfItems => listOfItems.key !== key);
      })
  }

  return (
    <ScrollView>
      <Header/>
        <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems}  renderItem={({item}) => (
            <ListItem element={item} deleteHandler={deleteHandler} />
        )}/>
      </View>
    </ScrollView>
  );
}


