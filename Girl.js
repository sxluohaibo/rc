import React,{Component} from 'react';
import {
  View,
  Text
} form 'react-native';

export default Girl extends Component{

  constructor(props) {
    super(props);
    this.state={
      word:''
    }
  }

  render(
    return({
      <View style={styles.container}>
        <Text style={styles.text}>i am a boy</Text>
        <Text style={styles.text}
          onPress={()=>{

          }}>i am a boy</Text>
      </View>
    })
  )

}

const styles=StyleSheet.create({
  container:{
    flex: 1;
    backgroundColor: 'red'
  },
  text:{
    fontSize: 20,
  }
})
