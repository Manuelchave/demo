import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import db from '../firebase/config';
import {ref, set} from "firebase/database";

class SwitchVel extends React.Component{
 
  render() {
    const styles = StyleSheet.create({
      container: {
        height:40,
        borderRadius:100,
        width:"100%",
        backgroundColor:"white",
        left: this.props.item.status ? "50%" :0
      },
      toggle:{
        height:40,
        width:"50%",
        backgroundColor:"#008dff",
        borderRadius:100,
        alignItems: "center",
        justifyContent:"center", 
      },
      leable: {
        fontSize:15,
        color:"white"
      },})

  return(
      <View style={styles.container}>
        <TouchableOpacity
          onPress={ () => {
              set(ref(db, 'velocidad/' + this.props.item.id), {
                  status: !this.props.item.status,
                  });
              }}style={styles.toggle}
            >
          <Text style={styles.leable}>
              {this.props.item.status ? "Alta": "Baja"}
          </Text>
        </TouchableOpacity>
      </View>
  );
}
}
export default SwitchVel