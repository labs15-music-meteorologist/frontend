import React, { Component } from 'react';
import { Mixpanel } from '../analytics/Mixpanel';

export class Helloworld extends Component {
  //   componentDidMount() {
  //     // Mixpanel Tracking
  //     Mixpanel.identify(this.props.user.display_name);
  //     Mixpanel.track('Successful Logout');
  //     Mixpanel.people.set({
  //       $first_name: this.props.user.first_name,
  //       $last_name: this.props.user.last_name,
  //     });
  //   }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default Helloworld;
