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
  View,
  ScrollView,
  Button,
} from 'react-native';

import {
  Request,
  Response,
  RNETWORK,

} from './main-index';

export default class RNETWORKExample extends Component {
  render() {
    let jsonData = {
      'name': 'XXXXXX',
      'city': 'YYYYYY'
    };
    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1, padding: 16}}>

          <Text style={styles.welcome}>
            Network Library Example
          </Text>

          <Text style={styles.title}>
            Get Method Example
          </Text>
          <Text style={styles.label}>
             http://demo9062349.mockable.io/country
          </Text>

          <View style={{marginTop: 16}} >
            <Button onPress={()=>{this.getRequestExample()}}
              title="Execute"
              color="#841584"
              >

            </Button>
          </View>

          <Text style={styles.title}>
            Get Method With QueryParams Example
          </Text>
          <Text style={styles.label}>
             http://demo9062349.mockable.io/country?code=US
          </Text>

          <View style={{marginTop: 16}} >
            <Button onPress={()=>{this.getRequestWithQueryParamsExample()}}
              title="Execute"
              color="#841584"
              >

            </Button>
          </View>


          <Text style={styles.title}>
            Post Method JSON Data Example
          </Text>
          <Text style={styles.label}>
             {
               "http://demo9062349.mockable.io/postJsonData" + "\n\n" + JSON.stringify(jsonData)
             }
          </Text>

          <View style={{marginTop: 16}} >
            <Button onPress={()=>{this.postJsonDataExample()}}
              title="Execute"
              color="#841584"
              >

            </Button>
          </View>

          <Text style={styles.title}>
            Post Method Form Data Example
          </Text>
          <Text style={styles.label}>
            {
              "http://demo9062349.mockable.io/postFormData" + "\n\n'name=XXXXXX&city=YYYYYY'"
            }
          </Text>

          <View style={{marginTop: 16}} >
            <Button onPress={()=>{this.postFormDataExample()}}
              title="Execute"
              color="#841584"
              >

            </Button>
          </View>


          <Text style={styles.title}>
            Post Method String Data Example
          </Text>
          <Text style={styles.label}>
             http://demo9062349.mockable.io/postStringData
          </Text>

          <View style={{marginTop: 16}} >
            <Button onPress={()=>{this.postStringDataExample()}}
              title="Execute"
              color="#841584"
              >

            </Button>
          </View>

          <View style={{height:200}}></View>


        </ScrollView>

      </View>
    );
  }

  getRequestExample() {
    let request = new Request('http://demo9062349.mockable.io/country');
    request.addHeader('Content-Type', 'application/json');  //To add single header
    RNETWORK.get(request, () => {
      // Pre execute call back
      //This will be called before making API call
      //Show the loader here
    }, (response: Response) =>{
      // Post execute call back
      // Success and Failure resposne in same callback
      //Check for error then process
      if(response.getError()){
        alert(response.getError().message);
      }else{
        alert(response.getBodyString());
      }

    });
  }

  getRequestWithQueryParamsExample() {
    let request = new Request('http://demo9062349.mockable.io/country');
    request.addHeaders({
      'Content-Type': 'application/json',
      'Accept-Encoding': '*',
    });//To add multiple headers
    request.setQueryParams({
      code : 'US'
    });//To set query params
    RNETWORK.get(request, () => {
      // Pre execute call back
      //This will be called before making API call
      //Show the loader here
    }, (response: Response) =>{
      // Post execute call back
      // Success and Failure resposne in same callback
      //Check for error then process
      if(response.getError()){
        alert(response.getError().message);
      }else{
        alert(response.getBodyString());
      }
    });
  }

  postJsonDataExample() {
    let request = new Request('http://demo9062349.mockable.io/postJsonData');
    request.addHeader('Content-Type', 'application/json');  //To add single header
    request.setJsonData({
      name: 'XXXXXX',
      city: 'YYYYYY'
    }); //To set json data in request object
    RNETWORK.post(request, () => {
      // Pre execute call back
      //This will be called before making API call
      //Show the loader here
    }, (response: Response) =>{
      // Post execute call back
      // Success and Failure resposne in same callback
      //Check for error then process
      if(response.getError()){
        alert(response.getError().message);
      }else{
        alert(response.getBodyString());
      }

    });
  }

  postFormDataExample() {
    let request = new Request('http://demo9062349.mockable.io/postFormData');
    request.addHeader('Content-Type', 'application/x-www-form-urlencoded');  //To add single header
    request.setFormData({
      name: 'XXXXXX',
      city: 'YYYYYY'
    }); //To set form data in request object
    RNETWORK.post(request, () => {
      // Pre execute call back
      //This will be called before making API call
      //Show the loader here
    }, (response: Response) =>{
      // Post execute call back
      // Success and Failure resposne in same callback
      //Check for error then process
      if(response.getError()){
        alert(response.getError().message);
      }else{
        alert(response.getBodyString());
      }

    });
  }

  postStringDataExample() {
    let request = new Request('http://demo9062349.mockable.io/postStringData');
    request.setStringData("XXXXXX"); //To set string data in request object
    RNETWORK.post(request, () => {
      // Pre execute call back
      //This will be called before making API call
      //Show the loader here
    }, (response: Response) =>{
      // Post execute call back
      // Success and Failure resposne in same callback
      //Check for error then process
      if(response.getError()){
        alert(response.getError().message);
      }else{
        alert(response.getBodyString());
      }
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 16,
    fontSize: 17,
    marginTop: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold'
  },
});

AppRegistry.registerComponent('RNETWORK', () => RNETWORKExample);
