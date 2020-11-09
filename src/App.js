import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/homepage.component';
import './App.css';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubcribeFromAuth = null;

    componentDidMount() { 
      this.unsubcribeFromAuth =  auth.onAuthStateChanged( async user => {
        createUserProfileDocument(user);
        
      });
    
    }

    componentWillUnmount() {
      this.unsubcribeFromAuth();
    }
  
   render(){
     return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path='/shop' component = {ShopPage} />
          <Route path='/signin' component  = {SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
