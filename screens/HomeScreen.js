import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import db from '../src/firebase/config';
import {ref, onValue, set} from "firebase/database";
import Motor from '../src/components/Motor';

export default function HomeScreen({ navigation }) {

const [listDevices, setlistDevices] = useState([]);

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
    useEffect(()=>{
      motor();
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
              marginRight:100, 
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
