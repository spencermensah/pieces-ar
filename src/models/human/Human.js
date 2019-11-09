import React, { Component } from 'react';
import 'aframe-animation-component'
import {Entity} from 'aframe-react';
import {Marker} from 'react-web-ar'

class Human extends Component {
  render() {
    return (
      <Marker parameters={{ preset: 'custom', type: 'pattern', patternUrl: 'blacktext.patt'}}>
        <Entity
          position={{ x:0.4 , y: 2.6, z: 0 }}
          obj-model='obj: logostd.obj; mtl: logostd.mtl;'
          animation="property: rotation; to: 360 360 0; loop: true; dur: 5000"
          scale={{x: 0.05, y: 0.05, z: 0.05}}
          rotation={{ x:0 , y: 0, z: 0 }}
          />
        <Entity
          position={{ x: 0, y: 0, z: 0 }}
          obj-model= {this.props.objlocation}
          animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"
          scale={{x: 0.15, y: 0.15, z: 0.15}}
          />
      </Marker>
    );
  }
}
export default Human;
