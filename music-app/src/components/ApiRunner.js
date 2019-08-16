import React from 'react';
import { connect } from 'react-redux';
import { getWelcome } from '../actions';

class ApiRunner extends React.Component {
  constructor() {
    super();
    this.state = {
      message: null
    }
  }

  componentDidMount() {
    console.log("in CDM");
    this.props.getWelcome();
  }

  render() {
    console.log("this.props-----------------\n",this.props)
    return (this.props.message) ?
      <div>
        <h1>API RUNNER</h1>
        <h1>{this.props.message}</h1>
      </div>

    :  <h1>Loading...</h1>
  }
}

const mapStateToProps = state => ({
  message: state.apiRunningReducer.message,
});

export default connect(
  mapStateToProps,
  { getWelcome }
)(ApiRunner);
