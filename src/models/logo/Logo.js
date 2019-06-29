import React, { Component } from 'react';
import {Entity} from 'aframe-react';
import {Marker} from 'react-web-ar'

class Logo extends Component {
  render() {
    return (
      <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'pieceslogo.patt'}}>
        <Entity
          position={{ x: 0, y: 0, z: -0.3 }}
          obj-model='obj: logostd.obj; mtl: logostd.mtl;'
          animation="property: rotation; to: 0 0 360; loop: true; dur: 5000"
          scale={{x: 0.1, y: 0.1, z: 0.1}}
          />
        <Entity
          position={{ x: 0, y: 0, z: 0.4 }}
          obj-model='obj: LogoText.obj; mtl: LogoText.mtl;'
          scale={{x: 0.3, y: 0.3, z: 0.3}}
          />
      </Marker>
    );
  }
}

export default Logo;
