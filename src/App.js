import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Route, Router, Switch, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SigninAndSignup from './pages/sign-in-and-sign-upPage/sign-in-and-sign-up.component';
import {setCurrentUser} from './redux/user/user.action';
import CheckoutPage from './pages/checkout/checkout.component';

import {auth, createUserProfile, addCollectionAndDocuments} from './firebase/firebase.util';
import './App.css';
import { selectCurrentuser } from './redux/user/user.selecter';
//import {selectCollectionForPreview} from './redux/shop/shop.selector';
class App extends React.Component {
 
  unsubscriptFormAuth=null
  componentDidMount(){
    const {setCurrentUser, collectionsArray}= this.props;
    this.unsubscriptFormAuth = auth.onAuthStateChanged( async userAuth =>{

        if(userAuth){
          
          const userRef = await createUserProfile(userAuth);
          userRef.onSnapshot((snapshot)=>{
            setCurrentUser({
                id:snapshot.id,
                ...snapshot.data()               
            })
              // this.setState({
              //   currentUser:{
              //     id:snapshot.id,
              //     ...snapshot.data()
              //   } 
              // })
           })
        }
        
        setCurrentUser(userAuth);
        //this.setState({currentUser:userAuth})
      //  alert('addCollectionAndDocuments')
        //addCollectionAndDocuments('collections', collectionsArray.map(({title,items})=>({title,items})));
    })


  }
  
  componentWillUnmount(){
    this.unsubscriptFormAuth();
  }
  render(){
    const {currentUser}=this.props;
    // const {currentUser:{email,displayName }}=this.state;
    //const { email, displayName } = currentUser;
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={currentUser ? HomePage : SigninAndSignup}/>
          <Route exact path="/home" component={HomePage}/>
          <Route path="/hat" render={()=>(<div> <h1>Hats page</h1></div>)}/>
          <Route path={"/shop"} component={Shop} /> 
          <Route path={"/checkout"} component={CheckoutPage} /> 
          <Route path={"/sigin"} render={()=>{
            return this.props.currentUser ? (<Redirect to="/"/>) : <SigninAndSignup/>
          }} /> 
          <Route path={'/shop/hats'} render={()=>(<div> <h1>Hats page</h1></div>)}/>
          <Route path={'/shop/men'} render={()=>(<div> <h1>mens page</h1></div>)}/>               
        </Switch>
      </div>
    );
  }
}

//createStructuredSelector

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
 // collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
