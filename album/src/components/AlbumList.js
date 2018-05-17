import React, { Component } from 'react';
import { View, Alert } from 'react-native';

import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = {
    albums: []
  };

  componentWillMount() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(r => this.setState({ albums: r.data }));
  }

  renderAlbums() {
    return this.state.albums.map(a =>
      <AlbumDetail key={a.title} album={a} />
    );
  }

  render() {
    return (
        <View>
          {this.renderAlbums()}
        </View>
    );
  }
}

export default AlbumList;
