import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import './Header.css';
import { Container } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ justifyContent: 'space-between' }}>
          <Container>
            <Navbar.Brand style={{ marginLeft: '10px' }}>My Favorite Books</Navbar.Brand>
          </Container>
          <Container>
            <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
            <Link style={{ textDecoration: 'none' }} to="/profile">Profile</Link>
            {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}

            {
              this.props.auth0.isAuthenticated ?
                <LogoutButton /> :
                <LoginButton />
            }
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
