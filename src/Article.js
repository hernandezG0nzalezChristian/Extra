import { View, Text } from "react-native";
import React from "react";
import Si from "./Si";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator ();

export default function Inicio(){
    return(
        
       <Drawer.Navigator>
        <Drawer.Screen name="inicio" component={Si}/>
       </Drawer.Navigator>
     
    );
}
