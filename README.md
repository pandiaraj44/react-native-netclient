# react-native-netclient

A network library which provides the most fastest & efficient way to handle the HTTP request and response. It acts like a rest client and supports on both ios & android. It uses the core [fetch](https://facebook.github.io/react-native/docs/network.html)  react native API. This library follows the oops standard for accessing javascript objects. User-friendly API that allows you to maintain your API code neat and would be useful for maintenance.

- [Getting Started](https://github.com/pandiaraj44/react-native-netclient#getting-started)
- [ Example](https://github.com/pandiaraj44/react-native-netclient#example)
- [Documentation](https://github.com/pandiaraj44/react-native-netclient#documentation)
- [References](https://github.com/pandiaraj44/react-native-netclient#references)

# Getting Started
**1. Install**` npm i react-native-netclient --save`

**2. Import network components**
```
import {
  Request,
  Response,
  RNETWORK,
} from 'react-native-netclient;
```

**3. Create the request object**
```
let request = new Request('http://demo9062349.mockable.io/country');
    request.addHeaders({
      'Content-Type': 'application/json',
      'Accept-Encoding': '*',
    });//To add multiple headers
    request.setQueryParams({
      code : 'US'
    });//To set query params
```

**4. Make the API request**
```
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
```

# Example

```
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
} from 'react-native-netclient';

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
```

# Documentation

### Core Classes

- **Request** (Used to build the request)
- **Response** (Provides the API response in standard format)
- **RNETWORK** (Used to handle the API request methods and hit the API)

### 1. Request Class

**Constructor**
This class takes an URL string as a constructor params.

 Ex) new Request("http://demo9062349.mockable.io/country")

**Instance Methods**


| Methods  | Params | Param Types  | Usage | Example |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **setUrl**  | url  | string  | API url(Without the query params)   | **request.setUrl(http://demo9062349.mockable.io/country)**  |
| **addHeader**  | key <br><br> value  | string <br><br> string | To add a single API header   | **request.addHeader('Content-Type', 'application/json');**  |
| **addHeaders**  | headersmap  | map/javscript object | To add a multiple API headers   | **request.addHeaders({'Content-Type': 'application/json', 'Accept-Encoding': '*'});**  |
| **setQueryParams**  | queryPrams  | map/javscript object  | To add a query params   | **request.setQueryParams({code : 'US'});**  |
| **setStringData**  | stringData  | string  | To post a string data   | **request.setStringData("XXXXXX");**  |
| **setJsonData**  | jsonData  | json  | To post a json data   | **request.setJsonData({name: 'XXXXXX',city: 'YYYYYY'});**  |
| **setFormData**  | formData  | json  | To post a form data   | **request.setFormData({name: 'XXXXXX',city: 'YYYYYY'});**  |
|   |   |   |    |   |
| **getUrl**  | -  | -  | returns a URL string   | **request.getUrl()**  |
| **getHeaders**  | -  | -  | returns a headrs map   | **request.getHeaders()**  |
| **getQueryParamsMap**  | -  | -  | returns a query params map   | **request.getQueryParamsMap()**  |
| **getQueryParams**  | -  | -  | returns a query params constructed string   | **request.getQueryParams()**  |
| **getStringData**  | -  | -  | returns a string post data   | **request.getStringData()**  |
| **getJsonData**  | -  | -  | returns a json post data   | **request.getJsonData()**  |
| **getFormData**  | -  | -  | returns a form post data   | **request.getFormData()**  |

### 2. Response Class

**Instance Methods**

| Methods  | Params | Return Types  | Usage | Example |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **getStatus**  | -  | integer/string  | returns a API status code   | **response.getStatus()**  |
| **getUrl**  | -  | string  | returns a request URL   | **response.getUrl()**  |
| **getHeaders**  | -  | map/json  | returns a response headers  | **response.getHeaders()**  |
| **getBodyString**  | -  | string  | returns a response body as string  | **response.getBodyString()**  |
| **getBodyJson**  | -  | map/json  | returns a response body as json  | **response.getBodyJson()**  |
| **getError**  | -  | map  | returns a error object<br>{error: 'Javscript error object', message: 'Error message string'}   | **response.getError()**  |

### 3. RNETWORK Class

**Instance Methods**

**1. get(request: Request, preExecuteCallback, postExecuteCallback)**
Used to make the **"GET"** request.

**Params**

**request -** The request object have to build using Request class.

**preExecuteCallback-** A normal javascript function has no params. It will be called before making API call. Here you can show the progress loader.

**postExecuteCallback-** A normal javascript function has only one param with Response return type. It will be called after making API call. Here you can hide the progress loader and add your response logic here.

**Example**
```
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
```

**2. post(request: Request, preExecuteCallback, postExecuteCallback)**
Used to make the **"POST"** request.

**Params**

**request -** The request object have to build using Request class.

**preExecuteCallback-** A normal javascript function has no params. It will be called before making API call. Here you can show the progress loader.

**postExecuteCallback-** A normal javascript function has only one param with Response return type. It will be called after making API call. Here you can hide the progress loader and add your response logic here.

**Example**
```
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
```

**To enable logs** - RNETWORK.DEBUG_ENABLED = true;

 # References
1. https://facebook.github.io/react-native/docs/network.html
2. https://developer.android.com/reference/android/os/AsyncTask.html
3. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
