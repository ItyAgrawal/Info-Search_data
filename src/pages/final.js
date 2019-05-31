import React, {Component} from 'react';

import {Platform, Button, TouchableOpacity,StyleSheet, Text, View,TextInput,ScrollView,ActivityIndicator,Linking} from 'react-native';

import Login from './Login';
import Signup from './Signup';
import all_places from './all_places';
import { ActionConst } from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';

export default class App extends React.Component {

x = ["https://en.wikipedia.org/wiki/Mumbai","https://en.wikipedia.org/wiki/Pune","https://en.wikipedia.org/wiki/Jaipur",
"https://en.wikipedia.org/wiki/Bangalore","https://en.wikipedia.org/wiki/Hyderabad","https://en.wikipedia.org/wiki/Indore"]

  constructor(props)
  {
    super(props);
    this.state={
      isLoading:true,
      dataSource:[],
      search:'',
      showInfo:[false,false,false,false,false,false,false]
 
    },
 
      this.infoPressed = this.infoPressed.bind(this);
 
  }
 
 callfunc()
 {
   Actions.login();
 }
 callingfunc()
 {
   Actions.all_places();
 }
 infoPressed = (index) => {
 
 let arr= Object.assign({}, this.state.showInfo);
 arr[index]= !arr[index];
     this.setState({
       search: this.state.search,
       showInfo: arr
 
     });
 }


  componentDidMount(){
    return fetch('https://gist.githubusercontent.com/rbagrwl/1b75e9ad2b35b4334f6f9271095fd697/raw/d2347566061117a628f3438576c4340045c2a3ff/place.json')
    

      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.places,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      
        <View style={{flex:1,backgroundColor:'#e3d0d0'}}>
          <TouchableOpacity  style={{color:"#fffff2" , padding:10 ,backgroundColor:"#a4a4b6" , marginRight:310,marginLeft:20, marginTop:10}} onPress={()=>{this.callfunc()}}><Text>BACK</Text></TouchableOpacity>
          <Text style={{color:"#7567B1" , fontSize:30, textAlign:'center'}}> MyAPP </Text>
         <TextInput style={{color:"#7567B1" , fontSize:20, borderColor: "#0C0D0D" ,borderWidth:5 ,padding:15}}
            placeholder="Live Search"
            onChangeText={(text) => {
              this.setState({search: text,
              })
            }}
          value={this.state.search}/>
          <ScrollView style={{flex:1 }}>
          {
            this.state.dataSource.filter(place => {return ((this.state.search == 'LIVESEARCH') || (place.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1))
              }).map((place,index) => (
         <View key={index} style={{flex:1 , padding:30 }}>
              
               <View style={{flexDirection:'row',padding: 10 ,borderwidth:5, borderColor: "#0C0D0D" }}>
          <Text style={{fontSize:20,width:200,marginRight:10}}>{place}</Text>
          <Button style={{width:20,height:20 ,paddingLeft:200}}
                   onPress={() => this.infoPressed(index)}
                   title ="info"/>
         
          
              {
                (this.state.showInfo[index] && (index!=0) &&
                        (
                          <View style={{marginLeft:10}}><Text style={{color:"#850101"}} onPress={()=> Linking.openURL(this.x[index-1])}>Click_here</Text></View>
    
                        )
                )
                        }
                        {
                (
                this.state.showInfo[0] && (index == 0) &&
                (
                 <View style={{marginLeft:10}}><Text  style={{color:"#850101"}} onPress={()=>{this.callingfunc()}}>Click_here</Text></View>
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




































