import React, { Component } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(url) {
    console.log('url', url);
  }

  render() {
    return (
      <div className="App">
        <div className="side-bar">
          <SearchBox callback={this.search}/>
        </div>
        <div className="content-wrapper">
          content
        </div>
      </div>
    );
  }
}

export default App;
