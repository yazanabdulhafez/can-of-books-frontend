import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Navbar bg='dark' variant='dark' fixed='bottom'>
          <Container style={{ justifyContent: 'center' }}>
            <Navbar.Brand href='https://github.com/yazanabdulhafez'>
              All Rights Reserved&copy;Yazan Alkharabsheh
            </Navbar.Brand>
          </Container>
        </Navbar>
      </footer>
    );
  }
}

export default Footer;
