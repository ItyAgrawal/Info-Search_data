import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import data from '../data.json' 

export default class Login extends Component {
render()
{
    return (
        data.cities.map((x,index)=>{
        <View key={index}> 
           <Text>x.place</Text> 
           {
           x.spots.map((y,index1)=>{
              <View key={index1}>
             <Text>y.name</Text>

              </View> 

           }
           )

           }
                </View>

           }
           )


    );
} 
}   
   