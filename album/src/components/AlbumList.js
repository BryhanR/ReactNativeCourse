import React, { Component } from 'react';
import { View } from 'react-native';

import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {

  state = {
    albums: []
  };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(r => this.setState({ albums: r.data }));
  }

  renderAlbums() {
    console.log('Estos son los albums');
    return this.state.albums.map(a =>
      <AlbumDetail key={a.title} album={a} />
    );
  }

  render() {
    return (
        <View style="viewStyle">
          {this.renderAlbums()}
        </View>
    );
  }
}

export default AlbumList;
