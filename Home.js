import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@material-ui/core';


export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      buttonPressed: null
    }
  }

  // this.state.buttonPressed
  //get the above value inside the python file
  //probably using API

  render(){
    return(
      <View style={{flex:1,justifyContent: "space-around", alignItems: "center"}}>
        <Button
          variant="contained"
          color="primary"
          size='medium'
          onClick = {()=>{this.setState({buttonPressed:"A"})}}>
          A
        </Button>
        <Button
          variant="contained"
          color="primary"
          size='medium'
          onClick = {()=>{this.setState({buttonPressed:"B"})}}>
          B
        </Button>
        <Button
          variant="contained"
          color="primary"
          size='medium'
          onClick = {()=>{this.setState({buttonPressed:"C"})}}>
          C
        </Button>
        <Button
          variant="contained"
          color="primary"
          size='medium'
          onClick = {()=>{this.setState({buttonPressed:"D"})}}>
          D
        </Button>
        <Button
          variant="contained"
          color="primary"
          size='medium'
          onClick = {()=>{this.setState({buttonPressed:"E"})}}>
          E
        </Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
