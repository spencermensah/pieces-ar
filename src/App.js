import React, { Component } from 'react';
import 'aframe-animation-component'
import {AFrameRenderer} from 'react-web-ar'
import Logo from './models/logo/Logo'
import Trousers from './models/trousers/Trousers'
import Human from './models/human/Human'
import AlertDialog from './modal'
import FaInstagram from 'react-icons/lib/fa/instagram';
// import FaShoppingBasket from 'react-icons/lib/fa/shopping-basket';

import black_flame1 from './menubtm/black_flame1.png';
import blue from './menubtm/blue.png';
import cargo1 from './menubtm/cargo1.png';
import doublelogo1 from './menubtm/doublelogo1.png';
import flame1 from './menubtm/flame1.png';
import jeanspaied from './menubtm/jeanspaied.jpg';
import pink1 from './menubtm/pink1.png';



class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        blue: "obj: blue.obj; mtl: blue.mtl;",
        ash: "obj: ash.obj; mtl: ash.mtl;",
        blackflame: "obj: black_flame.obj; mtl: black_flame.mtl;",
        corgo: "obj: corgo.obj; mtl: corgo.mtl;",
        doublelogo: "obj: doublelogo.obj; mtl: doublelogo.mtl;",
        flame: "obj: flame.obj; mtl: flame.mtl;",
        pink: "obj: pink.obj; mtl: pink.mtl;",
        selected: "obj: ash.obj; mtl: ash.mtl;"
      };
    }

  // componentDidMount(){
  //   this.setState({
  //     selected: this.state.blue
  //   });
  // }

  changeTitle = param => e =>  {
    if (param === "blue") {
      this.setState({ selected: this.state.blue });
    } else if (param === "ash") {
      this.setState({ selected: this.state.ash });
    } else if (param === "blackflame") {
      this.setState({ selected: this.state.blackflame });
    } else if (param === "corgo") {
      this.setState({ selected: this.state.corgo });
    } else if (param === "doublelogo") {
      this.setState({ selected: this.state.doublelogo });
    } else if (param === "flame") {
      this.setState({ selected: this.state.flame });
    } else if (param === "pink") {
      this.setState({ selected: this.state.pink });
    } else {
      console.log("not avaible");
    }

  };

  render() {
    return (
      <div>
        <div class="Header">
          <a class="instagram" href="https://www.instagram.com/p_ieces/?hl=en"> <FaInstagram size={30} color="white" /> </a>
          <AlertDialog/>


        </div>
        <AFrameRenderer inherent={true}>
          <Human
            objlocation = {this.state.selected}
            />

        </AFrameRenderer>

        <div class="select">
          <table>
            <tr>
              <td><img src={blue} alt="header" onClick={this.changeTitle("blue")} height="57" /></td>
              <td><img src={jeanspaied} alt="header" onClick={this.changeTitle("ash")} height="57" /></td>
              <td><img src={black_flame1} alt="header" onClick={this.changeTitle("blackflame")} height="57" /></td>
              <td><img src={cargo1} alt="header" onClick={this.changeTitle("corgo")} height="57" /></td>
              <td><img src={doublelogo1} alt="header" onClick={this.changeTitle("doublelogo")}height="57" /></td>
              <td><img src={flame1} alt="header" onClick={this.changeTitle("flame")} height="57" /></td>
              <td><img src={pink1} alt="header" onClick={this.changeTitle("pink")} height="57" /></td>
            </tr>
          </table>
        </div>

      </div>



    );
}
}

export default App;
