import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image, SectionList } from 'react-native';
import db from '../src/firebase/config';
import {ref, onValue, set} from "firebase/database";




export default function HomeScreen({ navigation }) {


  const [listDevices, setlistDevices] = useState([]);

  const  readData = () => {
    const dbRef = ref(db, 'motor/');
    onValue(dbRef, (snapshot) => {
        let records = [];
          snapshot.forEach(childSnapshot => {
              records.push({...childSnapshot.val(), id: childSnapshot.key })
          });
        setlistDevices(records)
    })
  }
  
  
  
    useEffect(()=>{
      readData();
    }, [])
  
    


    return(
      <>
       <View style={styles.nav}>
            
            <Image source={ 
                        require('../img/logo.png') 
                                } 
                   style={{ width: 80, height: 80, marginTop:50,   alignItems: "baseline"}}
                 />
            <Text  style={{marginTop:-56, textAlign:"center", marginRight:100, fontSize:20,color:"#dabb54"}}>
                     Urban Cooler</Text>
         </View>
      <SafeAreaView style={styles.container}>
      <FlatList
          data={listDevices}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity   onPress={ () => {
                      set(ref(db, 'motor/' + item.id), {

                          status: !item.status,
                          
                        });
                    }}>
                  <Image source={ 
                          item.status ?  require('../img/button.png') 
                                  : require('../img/buttonoff.png') } 
                        style={{ width: 100, height: 100}}
                    />
              </TouchableOpacity> 
          
            </>
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
