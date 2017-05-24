import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Patient extends Component {
  render() {
      return (
                <View style={styles.container}>
                  <Text onPress={Actions.Connectcode}> Connectcode </Text>
                  <Text onPress={Actions.FirstAid}> First Aids </Text>
                  <Text onPress={Actions.CheckpointView}> Checkpoint View </Text>
					        <Text onPress={Actions.Activity}> Activity </Text>
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