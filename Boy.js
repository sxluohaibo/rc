import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Boy extends Component {
  constructor(props) {
    super(props);
    this.state={
      word:''
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>i am a boy</Text>
        {/* <Text style={styles.text}
          onPress={()=>{

          }}>I am a boy</Text> */}
      </View>
    )
  }
}


const styles=StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'blue'
  },
  text:{
    fontSize: 20,
  }
})
