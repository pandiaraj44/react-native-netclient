/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Request,
  Response,
  RNETWORK
} from './main-index';

export default class RNETWORKExample extends Component {
  render() {
    let request = new Request("http://demo9062349.mockable.io/country");
    request.setQueryParams({
      code : 'US'
    });
    RNETWORK.get(request, () => {
      // Pre execute call back
      //This will be called before making API call
      //Show the loader here
    }, (response: Response) =>{
      // Post execute call back
      // Success and Failure resposne in same callback
      //Check for error then process
      if(response.getError()){

      }else{
        alert(response.getBodyString());
      }

    });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Network Library Example
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('RNETWORK', () => RNETWORKExample);
