import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle, auth} from '../../firebase/firebase.util'


import './sign-in.style.scss'


class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        }
    }

    handelSubmit = async (e) => {
        e.preventDefault();       
        const {email, password} = this.state;
        
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email:'',
                password:'',
            })
        }catch(err){
          
            console.log('signInWithEmailAndPassword######', err.message);
        }
       
    }

    handelChange = e =>{
        console.log('handelChange',e)
        const {value,name}=e.target;
        this.setState({[name]:value})
    }

    render(){
        const {email, password} = this.state;
        return (<div className="sig-in">
            <h1 className="title">I already have an account</h1>
            <span>Sign in with your email and password </span>
            <form onSubmit={this.handelSubmit}>
                <FormInput type="email" value={email} label = "Email" name="email" onChangeHandeler={this.handelChange} required/>
                
                <FormInput type="password" value={password} label = "Password" name="password" onChangeHandeler={this.handelChange} required/>
                
                <div className="btn-group">
                    <CustomButton type="submit" > Sigin</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSigin> Sign in with Google</CustomButton>
                </div>
                
            </form>
        </div>)}
}


export default Signin;