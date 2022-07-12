import React, { useState} from 'react'
import {signInwithGooglePopup, 
        createUserDocumentFromAuth,
        signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.util'
import ForInput from '../form-input/ForInput';
import ButtonComponent from '../button/ButtonComponent';

import './signinform.scss'
import '../button/button.styles.scss'


const formFields = {
    email:"",
    password:"",
}
const SignUpForm = () => {
    const [formInput,setFormInput]=useState(formFields)
    const {email,password} = formInput;

    const resetFormFields = () => {
        setFormInput(formFields);
    };

    const signInWithGoogle = async () =>{ 
        await  signInwithGooglePopup();
      };
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
            await signInAuthUserWithEmailAndPassword(
                email,
                password
              );
            resetFormFields();

        }
        catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert("incorrect password for email");
                    break;
                case 'auth/user-not-found':
                    alert("user not is registered");
                    break;
                default:
                    console.log(error);
            }
            console.log(error)
        }
    }

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setFormInput({...formInput,[name]:value})
    }

  return (
    <>
    <div className="sign-up-container">
        <h2>Already have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <ForInput label="Email address" type="email" required onChange={handleChange} name="email" value={email}/>
            <ForInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
            <div className="buttons-container">
            <ButtonComponent type="submit">Sign In</ButtonComponent>
            <ButtonComponent type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</ButtonComponent>
            </div>
            </form>
    </div>
       
    </>
  )
}
export default SignUpForm;