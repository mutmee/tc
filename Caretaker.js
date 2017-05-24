import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Caretaker extends Component {
  render() {
      return (
                <View style={styles.container}>
					        <Text onPress={Actions.Information}> Information </Text>
                  <Text onPress={Actions.FirstAid}> First Aids </Text>
                  <Text onPress={Actions.Checkpoint}> Checkpoint </Text>
					        <Text onPress={Actions.ActivityView}> Activity View </Text>
                </View>       
            );
          }
        }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});