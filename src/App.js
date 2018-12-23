import React, { Component } from 'react';
import 'aframe-animation-component'
import {AFrameRenderer} from 'react-web-ar'
import Logo from './models/logo/Logo'
import Trousers from './models/trousers/Trousers'

class App extends Component {
  render() {
    //mtl: #tree-mtl

    return (
      <div>
        <div class="Header">
          <h1>Welcome to PIECES*</h1>
          <a href="https://www.instagram.com/p_ieces/?hl=en"> <p>follow us on instagram</p> </a>
          <a href="https://www.shopqrate.com/shop/?category=PIECES%2A"><p>available on shopqrate</p> </a>
        </div>
        <AFrameRenderer inherent={true}>

          <Logo/>
          <Trousers/>
        </AFrameRenderer>
      </div>

    );
  }
}

export default App;
