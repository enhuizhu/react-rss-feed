import React, { Component } from 'react';
import './search-box.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    const url = this.searchBox.value;
    this.searchBox.value = "";
    this.props.callback(url);
  }
  
  render() {
    return (
      <div className="search-box">
        <form className="form-inline">
          <div className="form-group">
            <div className="input-group">
              <input type="text" 
                className="form-control" 
                placeholder="http://"
                ref={(c) => {
                  this.searchBox = c;
                }}
              ></input>
              <div className="input-group-addon" 
                onClick={this.click}>Search</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
