import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../App.css';

class Profile extends Component {
  componentDidMount = () => {
    if (this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
        .then(result => {
          const jwt = result.__raw;
          const config = {
            headers: { "Authorization": `Bearer ${jwt}` },
            method: 'get',
            baseURL: process.env.REACT_APP_SERVER_URL,
            url: '/test'
          }
          axios(config)
            .then(axiosResults => console.log(axiosResults.data))
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
  }
  render() {
    return (
      <div className='profile'>

        {

          this.props.auth0.isAuthenticated ?

            <div className='profile_card'>
              <h1>Hello {this.props.auth0.user.name}</h1>
              <Card className='card'>
                <Card.Title>
                  <h2>Username:{this.props.auth0.user.name}</h2>
                  <h2 style={{ color: 'red' }}>email:{this.props.auth0.user.email}</h2>
                </Card.Title>
                <Card.Body>
                  <img src={this.props.auth0.user.picture} alt='hello' />
                </Card.Body>
              </Card>
            </div> :

            <div className='empty_div'>
              <h1>please login to see your profile</h1>
            </div>
        }
      </div>
    );
  }
}

export default withAuth0(Profile);
