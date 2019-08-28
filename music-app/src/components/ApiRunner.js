import React from 'react';
import { connect } from 'react-redux';
import { getWelcome } from '../actions';

class ApiRunner extends React.Component {
  constructor() {
    super();
    this.state = {
      message: null,
    };
  }

  componentDidMount() {
    this.props.getWelcome();
    this.props.mixpanel.track('Homepage Visit');
  }

  render() {
    return this.props.message ? (
      <div>
        <h1>API RUNNER</h1>
        <h1>{this.props.message}</h1>
      </div>
    ) : (
      <h1>Loading...</h1>
    );
  }
}

const mapStateToProps = state => ({
  message: state.apiRunningReducer.message,
});

export default connect(
  mapStateToProps,
  { getWelcome },
)(ApiRunner);
