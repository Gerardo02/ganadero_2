import React, { Component } from "react";
import "../app.css";

import Background from "../images/Fondo.png";

class counter extends Component {
  state = {};

  render() {
    return (
      <div>
        <img src={Background} alt="" />
      </div>
    );
  }
}

export default counter;

/*class counter extends Component {
  state = {};

  render() {
    return (
      <div>
        <img src={this.state.imageUr} />
        <h1>quiubo mundo</h1>
      </div>
    );
  }
}
*/
