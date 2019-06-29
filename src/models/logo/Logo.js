import React, { Component } from 'react';
import {Entity} from 'aframe-react';
import {Marker} from 'react-web-ar'

class Logo extends Component {
  render() {
    return (
      <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'pieceslogo.patt'}}>
        <Entity
          position={{ x: -0.5, y: 0, z: 0 }}
          obj-model='obj: logostd.obj; mtl: logostd.mtl;'
          animation="property: rotation; to: 360 0 0; loop: true; dur: 5000"
          scale={{x: 0.15, y: 0.15, z: 0.15}}
          />
      </Marker>
    );
  }
}

export default Logo;
