import React from 'react';

export class Info extends React.Component {
  render() {
    return (
      <div>
        <p style={{ color: 'red' }}>
          To use this service a premium Spotify account is required. Please make
          sure to granted access to the user-read-private scope during login.
        </p>
      </div>
    );
  }
}

export default Info;
