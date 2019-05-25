import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,ScrollView,FlatList, TouchableOpacity,} from 'react-native';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const restaurants = [
  {name: 'kact Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'},
  {name: 'aeact Cafe', address: '123 Anywhere St'},
  {name: 'bancy Restaurant', address: '799 Main St'},
  {name: 'caco Place', address: '550 Maple Rd'},
  {name: 'deact Cafe', address: '123 Anywhere St'},
  {name: 'eancy Restaurant', address: '799 Main St'},
  {name: 'faco Place', address: '550 Maple Rd'},
  {name: 'geact Cafe', address: '123 Anywhere St'},
  {name: 'hancy Restaurant', address: '799 Main St'},
  {name: 'iaco Place', address: '550 Maple Rd'},
  {name: 'jeact Cafe', address: '123 Anywhere St'},
  {name: 'kancy Restaurant', address: '799 Main St'},
  {name: 'laco Place', address: '550 Maple Rd'},
]


export default class App extends Component{  
 state = {
  search: null,
  showInfo: false,
}

infoPressed = (name) => {
    this.setState({ showInfo: !this.showInfo})
}
  
render() {
  return (          
     <View style={styles.top}> 
      <Text style={styles.header}>
        APP
      </Text>
      
      <TextInput  style={styles.nameAddress}
        placeholder="Live Search"
        onChangeText={ (text) => {
          this.setState({ search: text })
        }}
        value={this.state.search}

      /> 
    <ScrollView style={{paddingTop: 30}}>
      {
        restaurants.filter(place => {
          return !this.state.search || place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
          }).map((place, index) => {
            return (
              <View key={place.name} style={{
                flexDirection: 'row'
              }}>
                <Text>{index + 1}</Text>
                <View style ={{flexDirection: 'column',flex:1}}>
                <Text>{place.name}</Text>
                <Text style={{color: 'grey'}}>{place.address}</Text>
                </View>

                <TouchableOpacity 
                 onPress={() => this.infoPressed(place.name)}
                 style={styles.button}>
                  <Text>Info</Text>
                  {
                    this.state.showInfo &&
                    <View >
                      <Text>Restaurant Info</Text>
                    </View>
                  }
              </TouchableOpacity>
              </View>
          )
        })
  }
  </ScrollView> 
   
  </View>
    );
  }
}
const styles = StyleSheet.create({
  top:
  {
    flex:1,
    backgroundColor:'rgb(51,255,178)'
  },

  header:{
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#0066CC',
    fontWeight: '300'
  },

  row: {
    flexDirection: 'row'
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameAddress: {
    padding:10,
    fontSize:20,
    textAlign: 'left',
    backgroundcolor: '#0066CC',
    fontWeight:'300',
    borderColor: 'rgb(51, 63, 255)'
   
  },
  addressText: {
    color: 'grey'
  },

  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',}
}) 