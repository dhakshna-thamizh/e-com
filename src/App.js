import React from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './Pages/Homepage/homepage.component';

import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/header/header.component';
import CheckoutPage from './Pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';


class App extends React.Component {
  
  unsubcribeFromAuth = null;

    componentDidMount() { 
      const { setCurrentUser } = this.props;

      this.unsubcribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
          });
        
        }
        setCurrentUser(userAuth); 
        
      });
    
    }

    componentWillUnmount() {
      this.unsubcribeFromAuth();
    }
  
   render(){
     return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path='/shop' component = {ShopPage} />
          <Route exact path='/checkout' component = {CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render = { () => 
              this.props.currentUser ? (
                <Redirect to='/'/>
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
