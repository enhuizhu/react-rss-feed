import { connect } from 'react-redux';
import App from './App';
import * as actions from './actions/';

const mapDispatchToProps = (dispatch) => {
  return {
    getFeed: (feedUrl) => {
      dispatch(actions.getFeed(feedUrl));
    },

    addUrl: (feedUrl) => {
      dispatch(actions.addUrl(feedUrl));
    },
    
    removeLink: (index) => {
      dispatch(actions.deleteUrl(index));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    feedContent: state.xml,
    urls: state.urls,
  }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
