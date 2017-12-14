import React, { Component } from 'react';
import Articals from './components/Articals/Articals';
import { parseString } from 'xml2js';
import './articals.css';

class Articals extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  render() {
    return (
      <div className="articals">
        <div articls></div>
      </div>
    );
  }
}

export default App;
