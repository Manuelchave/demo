import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import db from '../firebase/config';
import {ref, set} from "firebase/database";

const Power = (props) => {
  
  return (
     <View style={styles.listItem}>
        <TouchableOpacity   onPress={ () => {
          
                            set(ref(db, 'power/' + props.item.id), {
                              
                                status: !props.item.status,
                                });
                            }}>
            <Image source={ 
                                props.item.status ?  require('../../img/powerOn.png') 
                                        : require('../../img/powerOff.png') } 
                                style={{ width:0, height:0,borderColor:"red",padding:23}}
                            />
                                
        </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({
  listItem:{
    marginTop:50,
    backgroundColor:"#fff",
    width:"100%",
    flex:1,
    alignSelf:"center",
    borderRadius:100,
    padding:10,
    borderColor:"red"
        }
      },
      
      );


export default Power