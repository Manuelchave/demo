import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native';
import db from '../src/firebase/config';
import {ref, onValue, set} from "firebase/database";
import Temp from '../src/components/Temp';
import Power from '../src/components/Power';
import Velocidad from '../src/components/Velocidad';

export default function HomeScreen({ navigation }) {

const [listPower, setlistPower] = useState([]);
const [listTemp, setlistTemp] = useState([]);
const [listvelocidad, setlistvelocidad] = useState([]);

  const  power = () => {
    const dbRefM = ref(db, 'power/');
    onValue(dbRefM, (snapshot) => {
        let records = [];
          snapshot.forEach(childSnapshot => {
              records.push({...childSnapshot.val(), id: childSnapshot.key })
          });
        setlistPower(records)
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
  const  velocidad = () => {
    const dbRefT = ref(db, 'velocidad/');
    onValue(dbRefT, (snapshot) => {
        let records = [];
          snapshot.forEach(childSnapshot => {
              records.push({...childSnapshot.val(), id: childSnapshot.key })
          });
        setlistvelocidad(records)
    })
  }


    useEffect(()=>{
      power();
      dataTemp();
      velocidad();
      }, [])

    return(
      <>
       <View style={styles.nav}>           
            <Image source={ 
            require('../img/logo.png') 
            }style={{ width: 65, height: 65, marginTop:60,   alignItems: "baseline"}}
            />
              <Text  
              style={{marginTop:-50,
                alignSelf:"center", 
              marginRight:-8, 
              fontSize:20,
              color:"#008dff"}}
              >Urban Cooler</Text>
         </View>
      <SafeAreaView style={styles.container}>
        <FlatList style={{margin:-20}}
            data={listTemp}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <Temp item={item} navigation={navigation}/>
            )}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
        <FlatList style={{marginTop:-40}}
            data={listPower}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <Power item={item} navigation={navigation}/>
            )}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.vel}>
      <Text style={styles.leableV}>Velocidad</Text>
      <FlatList 
       
            data={listvelocidad}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <Velocidad item={item} navigation={navigation}/>
            )}
        />
      </SafeAreaView>

   

    </>
    )}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      margin: 30,    
      marginTop:-30,
      
    },
    nav: {
      flex:1,
      backgroundColor: '#f2f2f2',
    },
    vel:{
      flex:1,

      padding:20
    },
    leableV:{
      flex:-0.8,
      color:"#4d4d4d",
      textAlign: "center",
      fontSize:22,
      marginTop:-50
  
    }
    
});
