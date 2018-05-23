import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header, Button, Spinner } from './components/common';
import  LoginForm  from './components/LoginForm';

import firebase from 'firebase';


class App extends Component{

    state = { loggedIn: false }

    componentWillMount () {

        firebase.initializeApp({
            apiKey: "AIzaSyA-iBgzPi9xiMHUA_xGTmbSqgOqRGILISg",
            authDomain: "authentication-udemy-a833d.firebaseapp.com",
            databaseURL: "https://authentication-udemy-a833d.firebaseio.com",
            projectId: "authentication-udemy-a833d",
            storageBucket: "",
            messagingSenderId: "176988025151"
          });


          firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                loggedIn: user? true: false
            });
          });

    }

    renderContent () {

        switch(this.state.loggedIn){
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}> 
                        Log out 
                    </Button>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size='large' />;
        }            
    }

    render () {
        return (
            <View>
                <Header headerText="Authentiation" />
                {this.renderContent()}
            </View>
        );
    }

}

export default App;
