import React, { Component } from 'react';
import 'aframe-animation-component'
import {AFrameRenderer} from 'react-web-ar'
import Logo from './models/logo/Logo'
import Trousers from './models/trousers/Trousers'
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaShoppingBasket from 'react-icons/lib/fa/shopping-basket';
import textlogoforsite from './textlogoforsite.png';


class App extends Component {
  render() {
    //mtl: #tree-mtl

    return (
      <div>
        <div class="Header">
          <a class="instagram" href="https://www.instagram.com/p_ieces/?hl=en"> <FaInstagram size={30} color="white" /> </a>
          <a class="shopping" href="https://www.shopqrate.com/shop/?category=PIECES%2A"> <FaShoppingBasket size={30} color="white" /> </a>
          <img src={textlogoforsite} height="70" />
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
