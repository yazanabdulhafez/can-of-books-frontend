import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './loginButton';

class Login extends React.Component {
  render() {
    return (
      ( !this.props.auth0.isAuthenticated ) &&
      <main>
        <Card bg='info' style={{ width: '25rem', marginTop: '10vw', border: 'solid 5px', height: '12vw' }}>
          <Card.Title>Log In</Card.Title>
          <Card.Body>
            <Card.Text>
              Click Below to Log In
            </Card.Text>
            {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
            <LoginButton />
          </Card.Body>
        </Card>
      </main>
    );
  }
}

export default Login;
