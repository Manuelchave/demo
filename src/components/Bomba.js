import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import db from '../firebase/config';
import {ref, set} from "firebase/database";

const Bomba = (props) => {
  return (
     <View style={styles.listItem}>
        <TouchableOpacity 
            style={{height:60,width:100,}}>
            <Image source={ 
                          require('../../img/bomba.png') 
                                  } 
                    style={{ width: 70, height: 70, marginTop:-5}}
            />
        </TouchableOpacity>
        <TouchableOpacity   onPress={ () => {
                            set(ref(db, 'bomba/' + props.item.id), {
                                status: !props.item.status,
                                });
                            }}>
            <Image source={ 
                                props.item.status ?  require('../../img/imagen_on.png') 
                                        : require('../../img/imagen_off.png') } 
                                style={{marginLeft:65, width:65, height:35, marginTop:13}}
                            />
        </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({
  listItem:{
    margin:25,
    padding:10,
    backgroundColor:"#42484b",
    width:"100%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:60
  }
});

export default Bomba