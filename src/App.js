import React, { Component } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import Articles from './components/Articles/Articles';
import UrlList from './components/UrlList/UrlList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.removeLink = this.removeLink.bind(this);
  }

  search(url) {
    this.props.addUrl(url);
    this.props.getFeed(url);
  }

  removeLink(index) {
    this.props.removeLink(index);
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="side-bar col-xs-12 col-sm-4">
            <SearchBox callback={this.search}/>
            <UrlList 
              search={this.props.getFeed} 
              removeLink={this.removeLink}
              urls={this.props.urls}
            />
          </div>
          <div className="content-wrapper col-xs-12 col-sm-8">
            <Articles feedContent={this.props.feedContent}/>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default App;
