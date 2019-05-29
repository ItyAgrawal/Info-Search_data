import React, {Component} from 'react';

import {Platform, Button, StyleSheet, Text, View,TextInput,ScrollView} from 'react-native';




const restaurants = [

  {name: 'aeact Cafe', address: '123 Anywhere St'},

  {name: 'Fancy Restaurant', address: '799 Main St'},

  {name: 'Taco Place', address: '550 Maple Rd'},


  {name: 'ueact Cafe', address: '123 Anywhere St'},

  {name: 'oancy Restaurant', address: '799 Main St'},

  {name: 'iaco Place', address: '550 Maple Rd'},


]





export default class App extends Component{  
  constructor(props)
  {
    super(props);
    this.state={
      search:'LIVESEARCH',
      showInfo:[false,false,false]
 
    },
 
      this.infoPressed = this.infoPressed.bind(this);
 
  }
 
 
 infoPressed = (index) => {
 
 let arr= Object.assign({}, this.state.showInfo);
 arr[index]= !arr[index];
     this.setState({
       search: this.state.search,
       showInfo: arr
 
     });
 }

render() {
  return(
    <View style={{flex:1,backgroundColor:'#85EFE8'}}><Text style={{color:"#7567B1" , fontSize:30, textAlign:'center'}}> MyAPP </Text>
     <TextInput style={{color:"#7567B1" , fontSize:20, borderColor: "#0C0D0D" ,borderWidth:5 ,padding:15}}
        placeholder="Live Search"
        onChangeText={(text) => {
          this.setState({search: text,
          })
        }}
      value={this.state.search}/>
      <ScrollView style={{flex:1 }}>
      {
        restaurants.filter(place => {return ((this.state.search == 'LIVESEARCH') || (place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1))
          }).map((place,index) => (
     <View key={place.name} style={{flex:1 , padding:30 }}>
          
           <View style={{flexDirection:'row',padding: 10 ,borderwidth:5, borderColor: "#0C0D0D" }}>
      <Text style={{fontSize:20,width:200,marginRight:60}}>{place.name}</Text>
      <Button style={{width:20,height:20 ,paddingLeft:200}}
               onPress={() => this.infoPressed(index)}
               title ="info"/>
     
      
          {
            (this.state.showInfo[index] && 
                    (
                      <View><Text>Information</Text></View>

                    )
            )
            }
             </View>
      </View>
    )
  )
    } 
  </ScrollView>
  </View>
  );
  }
  }
  
