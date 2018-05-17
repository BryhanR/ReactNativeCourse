import React, { Component } from 'react';
import { View, Alert } from 'react-native';

import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = {
    albums: []
  };

  componentWillMount() {
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
