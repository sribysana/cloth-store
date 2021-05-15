import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util'


import './sign-in.style.scss'


class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        }
    }

    handelSubmit = e=>{
        console.log('handelSubmit')
        e.priventDefault();
        this.setState({
            email:'',
            password:'',
        })
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
                    <CustomButton onClick={signInWithGoogle} isGoogleSigin> Sigin with Google</CustomButton>
                </div>
                
            </form>
        </div>)}
}


export default Signin;