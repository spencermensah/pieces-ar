import React, { Component } from 'react';
import './App.css';
import 'aframe-animation-component'
import {Entity} from 'aframe-react';
import { AFrameRenderer, Marker} from 'react-web-ar'

class App extends Component {
  render() {
    //mtl: #tree-mtl
    // <Entity
    //   position={{ x: 0, y: 0, z: 0 }}
    //   obj-model='obj: logo.obj; mtl: logo.mtl;'
    //   animation="property: rotation; to: 0 0 360; loop: true; dur: 5000"
    //   scale={{x: 0.3, y: 0.3, z: 0.3}}
    //   />
    return (
        <AFrameRenderer inherent={true}>
          <Marker parameters={{ preset: "hiro" }}>
            <Entity
              position={{ x: 0, y: 0, z: 0 }}
              obj-model='obj: trousers.obj; mtl: trousers.mtl;'
              animation="property: rotation; to: 0 0 360; loop: true; dur: 6000"
              scale={{x: 0.3, y: 0.3, z: 0.3}}
              />
          </Marker>
        </AFrameRenderer>
    );
  }
}

export default App;
