import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Temp = (props) => {
  return (
     <View style={styles.listItem}>
         <TouchableOpacity   >
                      <Text style={{
                                    color:"#4d4d4d", 
                                    fontSize:37,
                                    alignSelf:"center",
                                    margin:-30,
                                    marginTop:0}}>
                                    {props.item.c}°C</Text>
                          
    </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  listItem:{
    
    padding:60,
    backgroundColor:"#fff",
    alignSelf:"center",
    borderRadius:100,
    width: 200, height: 200,
    borderColor:"#008dff",
    borderWidth:5
    
    
  }
});

export default Temp