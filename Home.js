import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  render() {
      return (
                
                <View style={styles.container}>
                  <TouchableHighlight onPress={Actions.Patient}>
                    <Image
                      style={styles.item}
                      resizeMode = {Image.resizeMode.contain}
                      source={require('./img/2.png')}
                    />
                    </TouchableHighlight>
                 <Text>ผู้ดูแล</Text>                       
                  <TouchableHighlight onPress={Actions.Caretaker}>
                    <Image
                      style={styles.item}
                      source={require('./img/3.png')}
                    />
                  </TouchableHighlight>
                  <Text>ผู้ป่วย</Text>
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
    //borderColor: 'red',
    //borderWidth: 1,
  }, 
  item: {
    width: 200,
    height: 200,
    //borderColor: 'red',
    //borderWidth: 1,    
  }
});