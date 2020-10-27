import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/homepage.component';
import './App.css';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/header/header.component';
import { auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  componentDidMount() { 
    auth.onAuthStateChanged( user => {
      this.setState({ currentUser : user });
      console.log(user);
    });
    
  }

   render(){
     return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path='/shop' component = {ShopPage} />
          <Route path='/signin' component = {SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
