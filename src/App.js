import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SigninAndSignup from './pages/sign-in-and-sign-upPage/sign-in-and-sign-up.component';

import {auth} from './firebase/firebase.util'
import './App.css';
class App extends React.Component {
  constructor(props){
      super(props);
      this.state={
        currentUser:null
      }
  }
  unsubscriptFormAuth=null
  componentDidMount(){
    this.unsubscriptFormAuth = auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser:user
      })
    })
  }
  
  componentWillUnmount(){
    this.unsubscriptFormAuth();
  }
  render(){
    const {currentUser}=this.state;
    // const {currentUser:{email,displayName }}=this.state;
    //const { email, displayName } = currentUser;
    return (
      <div className="App">
        <Header userInfo={currentUser}/>
        <Switch>
          <Route exact path="/" component={currentUser ? HomePage : SigninAndSignup}/>
          <Route exact path="/home" component={HomePage}/>
          <Route path="/hat" render={()=>(<div> <h1>Hats page</h1></div>)}/>
          <Route  path={"/shop"} component={Shop} /> 
          <Route  path={"/sigin"} component={SigninAndSignup} /> 
          <Route path={'/shop/hats'} render={()=>(<div> <h1>Hats page</h1></div>)}/>
          <Route path={'/shop/men'} render={()=>(<div> <h1>mens page</h1></div>)}/>               
        </Switch>
        
      </div>
    );
  }
}

export default App;
