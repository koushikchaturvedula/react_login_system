import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="callout primary" id="Header">
        <div className="text-center">
          <h1>{this.props.name}</h1>
        </div>
      </div>
    );
  }
}

export default Header;