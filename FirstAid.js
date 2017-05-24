import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from './firebase';
import Firstaiditim from './Firstaiditim';
import _ from 'lodash'

export default class FirstAid extends Component {

  componentDidMount(){
    firebase.database()
    .ref('firstaid')
    .once('value',(snapshot) => {
      const value = snapshot.val();
      var _firstaidList = _.toArray(value);

      this.setState({firstaidList: this.state.dataSource.cloneWithRows(_firstaidList)});
    });
  }

    constructor(props){
      super(props)
      var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
      
      this.state = {
        dataSource: ds, 
        firstaidList: ds.cloneWithRows([])
      };
  }

    _renderRow(data){
      return <Firstaiditim data={data}/>
      
    }
    _showDetail(){
        console.log('hello world');
    }


  render(){
      return (
               <View style={styles.container}>
                   
                   <ListView 
                      dataSource={this.state.firstaidList}
                      renderRow={this._renderRow} 
                      
                   />
               </View>
            );

        }

    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop:64,
    },
});