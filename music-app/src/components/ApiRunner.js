import React from 'react';
import { connect } from 'react-redux';
import { getWelcome } from '../actions';

class ApiRunner extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('in CDM');
    this.props.getWelcome();
  }

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.apiRunningReducer.message
});

export default connect(
  mapStateToProps,
  { getWelcome }
)(ApiRunner);
