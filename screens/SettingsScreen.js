import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const SettingsScreeen = () => {
    return(
        <View style={styles.nav}>
            
            <Image source={ 
                        require('../img/logo.png') 
                                } 
                   style={{ width: 80, height: 80, marginTop:50,   alignItems: "baseline"}}
                 />
            <Text  style={{marginTop:-56, textAlign:"center", marginRight:100, fontSize:20,color:"#dabb54"}}>
                     Urban Cooler</Text>
         </View>
     
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a2e30',
    },
    nav: {
        flex:1,
        backgroundColor: '#2a2e30',
      }
  });
  
export default SettingsScreeen;