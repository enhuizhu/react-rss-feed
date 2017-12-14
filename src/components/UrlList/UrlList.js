import React from 'react';
import './url-list.css';

const UrlList = (props) => {
  return (
    <div className="url-list">
      {
        props.urls.map((url, k) => {
          return (<div className="url-wrapper" key={k}>
            <div 
              className="pull-left"
              onClick={() => {
                props.search(url);
              }}>
              {url}</div>
            <span 
              className="glyphicon glyphicon-remove pull-right"
              onClick={() => {
                props.removeLink(k);
              }}
            >
            </span>
            <div className="clearfix"></div>
          </div>)
        })
      }
    </div>
  )
};

export default UrlList;
