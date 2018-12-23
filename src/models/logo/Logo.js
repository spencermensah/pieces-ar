import React, { Component } from 'react';
import 'aframe-animation-component'
import {Entity} from 'aframe-react';
import {Marker} from 'react-web-ar'

class Logo extends Component {
  render() {
    return (
      <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'pattern-A.patt'}}>
        <Entity
          position={{ x: 0, y: 0, z: 0 }}
          obj-model='obj: logo.obj; mtl: logo.mtl;'
          animation="property: rotation; to: 0 0 360; loop: true; dur: 5000"
          scale={{x: 0.3, y: 0.3, z: 0.3}}
          />
      </Marker>
    );
  }
}

export default Logo;
