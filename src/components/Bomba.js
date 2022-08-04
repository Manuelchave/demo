import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import db from '../firebase/config';
import {ref, set} from "firebase/database";

const Bomba = (props) => {
  return (
     <View style={styles.listItem}>
        <TouchableOpacity   onPress={ () => {
                            set(ref(db, 'bomba/' + props.item.id), {
                                status: !props.item.status,
                                });
                            }}>
            <Image source={ 
                                props.item.status ?  require('../../img/imagen_on.png') 
                                        : require('../../img/imagen_off.png') } 
                                style={{ width:150, height:150,}}
                            />
        </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({
  listItem:{
   
    padding:10,
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:60
  }
});

export default Bomba