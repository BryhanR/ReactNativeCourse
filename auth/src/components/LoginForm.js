import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

  state = { email: '', password: '', error: '', loading: false};

  onButtonPress () {
    const { email, password } = this.state;

    this.setState({ error: ''})
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication failed....' })
          })
      });
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@mail.com"
            value ={this.state.email}
            label="Email"
            onChangeText = {email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            value ={this.state.password}
            label="Password"
            onChangeText = {password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorStyle}>
          { this.state.error}
        </Text>

        <CardSection>
          <Button
            onPress = {this.onButtonPress.bind(this)}
          >
            Log in
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
    errorStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'

    }
}


export default LoginForm;
