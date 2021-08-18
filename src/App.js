import React from 'react';
import Header from './components/Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './components/Footer';
import Login from './components/Login';
import MyFavoriteBooks from './components/BestBooks';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Profile from './components/Profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {

  render() {
    console.log('app', this.props);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header auth0={this.props.auth0} />

            <Switch>
              <Route exact path='/' >
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated ? <MyFavoriteBooks />
                  : <Login auth0={this.props.auth0} />}
              </Route>

              <Route exact path='/Profile' >
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                {this.props.auth0.isAuthenticated &&<Profile auth0={this.props.auth0} />}
              </Route>

            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
