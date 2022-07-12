import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import db from '../src/firebase/config';
import {ref, onValue, set} from "firebase/database";
import Motor from '../src/components/Motor';
import Temp from '../src/components/Temp';
import Bomba from '../src/components/Bomba';

export default function HomeScreen({ navigation }) {

const [listDevices, setlistDevices] = useState([]);
const [listTemp, setlistTemp] = useState([]);
const [listBomba, setlistBomba] = useState([]);
  const  motor = () => {
    const dbRefM = ref(db, 'motor/');
    onValue(dbRefM, (snapshot) => {
        let records = [];
          snapshot.forEach(childSnapshot => {
              records.push({...childSnapshot.val(), id: childSnapshot.key })
          });
        setlistDevices(records)
    })
  }  
  const  dataTemp = () => {
    const dbRefT = ref(db, 'temp/');
    onValue(dbRefT, (snapshot) => {
        let records = [];
          snapshot.forEach(childSnapshot => {
              records.push({...childSnapshot.val(), id: childSnapshot.key })
          });
        setlistTemp(records)
    })
  }
  const  bomba = () => {
    const dbRefB = ref(db, 'bomba/');
    onValue(dbRefB, (snapshot) => {
        let records = [];
          snapshot.forEach(childSnapshot => {
              records.push({...childSnapshot.val(), id: childSnapshot.key })
          });
        setlistBomba(records)
    })
  } 
    useEffect(()=>{
      motor();
      bomba();
      dataTemp();
    }, [])
    return(
      <>
       <View style={styles.nav}>           
            <Image source={ 
                          require('../img/logo.png') 
                                  } 
                    style={{ width: 80, height: 80, marginTop:50,   alignItems: "baseline"}}
            />
              <Text  
              style={{marginTop:-56,
              textAlign:"center", 
              marginRight:80, 
              fontSize:20,
              color:"#dabb54"}}
              >Urban Cooler</Text>
         </View>

      <SafeAreaView style={styles.container}>
      <FlatList
          data={listDevices}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <Motor item={item} navigation={navigation}/>
          )}
          
      />
  
    </SafeAreaView>

    <SafeAreaView style={styles.container}>
      <FlatList
          data={listBomba}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <Bomba item={item} navigation={navigation}/>
          )}
          
      />
  
    </SafeAreaView>

    <SafeAreaView style={styles.container}>
      <FlatList
          data={listTemp}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <Temp item={item} navigation={navigation}/>
          )}
      />
    </SafeAreaView>

    </>
    )
  
 }

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#2a2e30',
      alignItems: 'center',
      padding: 10,      
    },
    nav: {
      flex:1,
      backgroundColor: '#2a2e30',
    }
});
