import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from './firebase';

export default class FirstAid extends Component {
  constructor(props){
   super(props)
   this.state = {test: {a: 0}};
}

componentDidMount(){
  var self = this
  firebase.database()
  .ref('test')
  .on('value',(snapshop) => {
    const value = snapshop.val();
    self.setState({test: value});
  });
}

  render() {
      return (
                <View style={styles.container}>
                  <Text>tc {this.state.test.a}</Text>
                  
                    <Image
                      style={styles.item}
                      resizeMode = {Image.resizeMode.contain}
                      source={{uri:this.state.test.img}}
                    />
                  
                  
                
                </View>       
            );
          }
        }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop:64,
    }, 
  item: {
    width: 140,
    height: 140,
    //borderColor: 'red',
    //borderWidth: 1,
  }
});