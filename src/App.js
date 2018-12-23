import React, { Component } from 'react';
import 'aframe-animation-component'
import {AFrameRenderer} from 'react-web-ar'
import Logo from './models/logo/Logo'
import Trousers from './models/trousers/Trousers'

class App extends Component {
  render() {
    //mtl: #tree-mtl

    return (
        <AFrameRenderer inherent={true}>
          <Logo/>
          <Trousers/>
        </AFrameRenderer>
    );
  }
}

export default App;
