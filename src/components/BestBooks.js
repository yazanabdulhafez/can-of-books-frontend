import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { withAuth0 } from '@auth0/auth0-react';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {
  render() {
    return (
      <>
        <h1 style={{fontSize: '2.5rem',fontFamily: 'impact',margin: '2vw'}}>My Favorite Books</h1>
        <p style={{fontSize: '1.5rem',fontFamily: 'Josefin Sans',margin: '2vw'}}>
          This is a collection of my favorite books
        </p>
      </>
    );
  }
}

export default withAuth0( MyFavoriteBooks );
