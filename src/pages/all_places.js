import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Pattern from '../components/Pattern'
import data from '../data.json' 

export default class Delhi extends Component
{
render()
{return (
    <ScrollView style={{flex:1 , backgroundColor:"#a4a4b6"}}>
      <Pattern/>
           

    </ScrollView>


);


}

}

