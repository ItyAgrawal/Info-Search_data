import React, { Component } from 'react';
import {Text, View,StyleSheet} from 'react-native';

export default class App extends Component 
{
  
  constructor(props)
  {
    super(props);
    this.state ={
      isloading : true,
      datasource: null,
    }
  }
  componentDidMount()
  {
    return (
      fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then ((responseJson) =>
    {this.setState({
      isloading: false,
      datasource: responseJson.movies ,
    })

    })
    .catch((error) => 
    {
      console.log(error)

    })
    );

  }

  render()
  { 
    if (this.state.isloading)
    {
return (
  <View style={styles.container} >
    <Text> loading </Text>

  </View>
);
    }
    else
    {
      return (
      <View style={ styles.container} > 
      <Text> data_loaded </Text>
      </View>
    );
  }

  }
} 

const styles = StyleSheet.create
(
  {
  container :
  {
    flex:1,
    backgroundColor: '#0066CC',
    alignItems: 'center',
    justifyContent: 'center'
  },
}
)
