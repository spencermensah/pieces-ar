import React, { Component } from 'react';
import 'aframe-animation-component'
import {Entity} from 'aframe-react';
import {Marker} from 'react-web-ar'

class Trousers extends Component {
  render() {
    return (
      <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'blacktext.patt'}}>
        <Entity
          position={{ x: 0, y: 0, z: 0 }}
          obj-model='obj: Bbackandfront.obj; mtl: Bbackandfront.mtl;'
          animation="property: rotation; to: 0 0 360; loop: true; dur: 6000"
          scale={{x: 0.2, y: 0.2, z: 0.2}}
          />
        <Entity
          position={{ x: 0, y: 0, z: -1.2 }}
          obj-model='obj: LogoText.obj; mtl: LogoText.mtl;'
          scale={{x: 0.3, y: 0.3, z: 0.3}}
          />
      </Marker>
    );
  }
}

export default Trousers;
