import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  Linking
} from 'react-native';

import data from '../data.json' 

export default class Login extends Component {
    render()
    {return (
        <View style={{flex:1 ,backgroundColor:"#a4a4b6" , paddingTop:20}}>
            {
            data.cities.map((x,index)=>(
            <View key={x.place}> 
               <Text style={{flex:1 ,fontSize:30, color:"#c65836",borderColor:"#000000" ,backgroundColor:"#8bb4c6", borderWidth:1,margin:20,padding:5,width:180}}>{x.place}</Text> 
               {
               x.spots.map((y,index1)=>(
                  <View key={y.name} style={{flexDirection:"row"}}>
                 <Text style={{fontSize:20, width:200 , marginLeft:20}}>{y.name}</Text>
                 <Text style={{color:"#850101", fontSize:20 , marginLeft:30}} onPress={()=> Linking.openURL(y.url)}>Click_here</Text>
    
                  </View> 
    
               )
               )
    
               }
               </View>
    
            )
            )
            }
               
    
        </View>
    
    
    );
} 
}   
   