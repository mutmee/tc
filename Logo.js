import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Home from './Home';
import Caretaker from './Caretaker';
import Patient from './Patient';
import FirstAid from './FirstAid';
import Checkpoint from './Checkpoint';
import Activity from './Activity';
import Information from './Information';
import Code from './Code';
import Connectcode from './Code';
import Fillin from './Code';

export default class Logo extends Component {
  render() {
      return (
                <Router>
                  <Scene key="root">
                    <Scene key="Home" component={Home} title="Home" initial={true}/>
					<Scene key="Caretaker" component={Caretaker} title="Caretaker" />
					<Scene key="Patient" component={Patient} title="Patient" />
					<Scene key="FirstAid" component={FirstAid} title="FirstAid" />
                    <Scene key="Checkpoint" component={Checkpoint} title="Checkpoint" />
                    <Scene key="Activity" component={Activity} title="Activity" />
                    <Scene key="Information" component={Information} title="Information" />
                    <Scene key="Connectcode" component={Connectcode} title="Connectcode" />
                    <Scene key="Fillin" component={Fillin} title="Fillin" />
                    <Scene key="Basicfirstaid" component={Fillin} title="Basicfirstaid" />
					<Scene key="Code" component={Code} title="Code" />
                  </Scene>  
                </Router>
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