import React, { Component } from 'react';
import 'aframe-animation-component'
import {AFrameRenderer} from 'react-web-ar'
import Logo from './models/logo/Logo'
import Trousers from './models/trousers/Trousers'
import AlertDialog from './modal'
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaShoppingBasket from 'react-icons/lib/fa/shopping-basket';


class App extends Component {
  constructor(props) {
      super(props);
}


  render() {
    return (
      <div>
        <div class="Header">
          <a class="instagram" href="https://www.instagram.com/p_ieces/?hl=en"> <FaInstagram size={30} color="white" /> </a>
          <a class="shopping" href="https://piecesjeans.herokuapp.com/#/"> <FaShoppingBasket size={30} color="white" /> </a>
          <AlertDialog/>
        </div>
        <AFrameRenderer inherent={true}>
           <Logo/>
        </AFrameRenderer>
        <h5 class="select">Powered by Crea Cö</h5>
      </div>


    );
  }
}

export default App;
