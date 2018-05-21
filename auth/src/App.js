import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {Header} from './components/common';

import firebase from 'firebase';


class App extends Component{
    componentWillUnmount () {
        
        firebase.initializeApp({
            apiKey: "AIzaSyA-iBgzPi9xiMHUA_xGTmbSqgOqRGILISg",
            authDomain: "authentication-udemy-a833d.firebaseapp.com",
            databaseURL: "https://authentication-udemy-a833d.firebaseio.com",
            projectId: "authentication-udemy-a833d",
            storageBucket: "",
            messagingSenderId: "176988025151"
          });
        
    }

    render () {
        return (
            <View>
                <Header headerText="Authentiation" />
                <Text>
                    An app
                </Text>
            </View>
        );
    }

}

export default App;