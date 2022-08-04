
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import db from '../src/firebase/config';
import {ref, onValue, set} from "firebase/database";
import EcoFuction from '../src/components/EcoFuction'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreeen({ navigation }){
  const [listPower, setlistPower] = useState([]);
  const  ecofuction = () => {
    const dbRefM = ref(db, 'bomba/');
    onValue(dbRefM, (snapshot) => {
        let records = [];
          snapshot.forEach(childSnapshot => {
              records.push({...childSnapshot.val(), id: childSnapshot.key })
          });
        setlistPower(records)
    })
  }  
  useEffect(()=>{
ecofuction()
    }, [])

    return(
      
        <View style={styles.nav}>
            
            <Image source={ 
                        require('../img/logo.png') 
                                } 
                   style={{ width: 80, height: 80, marginTop:50,   alignItems: "baseline"}}
                 />
            <Text  style={{marginTop:-56, textAlign:"center", marginRight:100, fontSize:20,color:"#dabb54"}}>
                     Urban Cooler</Text>
        <SafeAreaView>
        <FlatList 
       
       data={listPower}
       keyExtractor={(item, index) => String(index)}
       renderItem={({ item }) => (
         <EcoFuction item={item} navigation={navigation}/>
       )}
          />
        </SafeAreaView>          

         </View>
     
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
    nav: {
        flex:1,
        backgroundColor: '#f2f2f2',
      }
  });
  
