import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

//Screens
import HomeScreen from"./screens/HomeScreen";
import SettingsScreen from"./screens/SettingsScreen";





const Tab = createBottomTabNavigator();


function MyTabs(){
    return(
        <Tab.Navigator
       
        screenOptions={{
            tabBarActiveTintColor: '#008dff',
            tabBarActiveBackgroundColor: '#f2f2f2',
            tabBarInactiveBackgroundColor: '#f2f2f2',
        }}
        >

        <Tab.Screen name="Home" component={HomeScreen}
        options={{
            tabBarIcon: ({color, size})=>(
                <MaterialCommunityIcons name="home" size={24} color={color} />
            ),
            headerShown: false,
            headerStyle: {
                backgroundColor: '#f2f2f2',
            },
            headerTitleStyle: {
                color:"#f2f2f2"
            }
            
        }}/>     
        <Tab.Screen name="Settings" styles={{color:"red"}} component={SettingsScreen}
            options={{
                tabBarIcon: ({color, size})=>(
                    <MaterialCommunityIcons name="cog" size={24} color={color} />),
                headerShown: false
            }}/>
        </Tab.Navigator>
       
    );
}
export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
