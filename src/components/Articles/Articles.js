import React from 'react';
import _ from 'lodash';
import './articles.css';

const Articles = (props) => {
  if (!props.feedContent.rss) {
    return <div>not content</div>;
  }

  return (
    <div className="articles">
      {
        _.map(props.feedContent.rss.channel, (channel) => {
          return _.map(channel.item, (item, i) => {
            return <div className="article" key={i}> 
              {
                _.map(item, (v, k) => {
                  return <div className="item-wrapper" key={_.uniqueId()}>
                    <div className="item-key">{k}</div>
                    <div className="item-value" 
                      dangerouslySetInnerHTML={{__html: v[0]}}>
                    </div>
                  </div>;
                })
              }
            </div>;                
          });
        })
      }
    </div>
  );
};

export default Articles;
