import React, {Component}  from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfile} from '../../firebase/firebase.util';


import './sign-up.styles.scss'


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email:'',
            password:'',
            cnfPassword:''
        }
    }
    handleChange = (e)=>{
        const {name, value}= e.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const {displayName, email, password, cnfPassword}= this.state;

        if(!(password == cnfPassword) ){
            alert('password and conform password are not matching');
            console.log(password,'------------' ,cnfPassword)
            console.log('password and conform password are not matching');
            return;

        }
           
        try{

            const {user}= await auth.createUserWithEmailAndPassword(email, password);
             await createUserProfile(user, {displayName});
             this.setState({
                displayName:'',
                email:'',
                password:'',
                cnfPassword:''
             })
        
        }catch(err){
            console.log(err.message)
        }
    }
    render(){
        const {displayName, email, password, cnfPassword}= this.state
        return(
            <div className="sign-up">
            <h2 className="title">Do You have account </h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                    />

                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={this.handleChange}
                    label="Email"
                    required
                    />

                <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={this.handleChange}
                    label="Enter password"
                    required
                    />
                <FormInput 
                    type="password" 
                    name="cnfPassword" 
                    value={cnfPassword} 
                    onChange={this.handleChange}
                    label="Re Enter password"
                    required
                    />
                <CustomButton type="submit"> Sign Up</CustomButton>
            </form>
            </div>
        )
    }
}


export default SignUp;