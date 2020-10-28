import React, { Component } from 'react';
import {Entity} from 'aframe-react';
import {Marker} from 'react-web-ar'

class Logo extends Component {
  render() {
    return (
      <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'newN.patt'}}>
        <Entity
          position={{ x:0, y: 0, z: -0.5 }}
          gltf-model='one.gltf'
          scale={{x: 1.5, y: 1.5, z: 1.5}}
          />
      </Marker>
    );
  }
}

export default Logo;
