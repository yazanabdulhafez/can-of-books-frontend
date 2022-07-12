import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './loginButton';


class Login extends React.Component {
  render() {
    return (
      (!this.props.auth0.isAuthenticated) &&
      <main className='login_main'>
        <Card bg='info' className='login_card'>

          <Card.Body>
            <Card.Title>Log In</Card.Title>
            <Card.Text>
              Click Below to Log In
            </Card.Text>
            <LoginButton />
          </Card.Body>

        </Card>
      </main>
    );
  }
}

export default Login;
