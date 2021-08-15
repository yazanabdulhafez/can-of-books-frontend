import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export class Profile extends Component {
  render() {
    return (
      this.props.auth0.isAuthenticated &&
      <div><h1>Hello {this.props.auth0.user.name}</h1>
        <Card style={{ width: '40rem', marginTop: '5vw', border: 'solid 5px' }}>
          <Card.Title>
            <h2>Username:{this.props.auth0.user.name}</h2>
            <h2 style={{ color: 'red' }}>email:{this.props.auth0.user.email}</h2>
          </Card.Title>
          <Card.Body>
            <img src={this.props.auth0.user.picture} alt='hello' />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Profile;
