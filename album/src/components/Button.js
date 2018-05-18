import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  
    return (
        <TouchableOpacity style={styles.ButtonStyle}>
            <Text>Click me!!!</Text>
        </TouchableOpacity>
    );
  };
  
  
  const styles = {

    ButtonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
  };
  
  
  export default Button;
