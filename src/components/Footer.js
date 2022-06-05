import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <footer  style={{position:'absolute',left:'0',width: '100%'}}>
        <Navbar bg='dark' variant='dark'>
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
