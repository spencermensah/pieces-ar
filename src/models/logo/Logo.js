import React, { Component } from 'react';
import {Entity} from 'aframe-react';
import {Marker} from 'react-web-ar'

class Logo extends Component {
  render() {
    return (
      <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'newN.patt'}}>
        <Entity
          position={{ x: 0, y: 0, z: 0 }}
          gltf-model='slide.gltf'
          />
      </Marker>
    );
  }
}

export default Logo;
