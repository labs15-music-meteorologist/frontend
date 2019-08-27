import React from 'react';
import { connect } from 'react-redux';
import { getWelcome } from '../actions';

// Styles imports
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

  // Material UI

  render() {
    return this.props.message ? (
      <div>
        <h1>API RUNNER</h1>
        <Typography variant='h4' gutterBottom>
          {this.props.message}
        </Typography>
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
