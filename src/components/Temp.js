import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import db from '../firebase/config';
import {ref, set} from "firebase/database";

const Temp = (props) => {
  return (
     <View style={styles.listItem}>
         <TouchableOpacity   onPress={ () => {
                      set(ref(db, 'temp/' + props.item.id), {
                          c: props.item.c,
                          h: props.item.h
                        });
                    }}>
                      <Text style={{fontWeight:"bold", color:"#dabb54"}}>Temperatura: {props.item.c}</Text>
                      <Text style={{fontWeight:"bold", color:"#dabb54"}}>Humedad: {props.item.h}</Text>
                          
    </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#42484b",
    alignSelf:"center",
    borderRadius:60,
    width:"100%"
  }
});

export default Temp