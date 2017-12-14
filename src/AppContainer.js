import { connect } from 'react-redux';
import App from './App';
import * as actions from './actions/';

const mapDispatchToProps = (dispatch) => {
  return {
    getFeed: (feedUrl) => {
      dispatch(actions.getFeed(feedUrl));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    feedContent: state.xml
  }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
