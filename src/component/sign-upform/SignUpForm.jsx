import React, { useState } from 'react'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.util'
import ForInput from '../form-input/ForInput';
import ButtonComponent from '../button/ButtonComponent';
import './signupform.scss'
import '../button/button.styles.scss'


const formFields = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}
const SignUpForm = () => {
    const [formInput,setFormInput]=useState(formFields)
    const {displayName,email,password,confirmPassword} = formInput;
    
    const resetFormFields = () => {
        setFormInput(formFields);
      };

    const handleSubmit=async (e)=>{
        e.preventDefault()
        if(password!== confirmPassword){
            alert("password doesn't math")
            return;
        }
        try{
            const {user} =await createAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user);

            await createUserDocumentFromAuth(user,{displayName})
            resetFormFields();

        }
        catch(error){
            if(error.code ==='auth/email-already-in-use'){
                alert("user exists")
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
        <h2>Don't have an account</h2>
    <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <ForInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
            <ForInput label="Email address" type="email" required onChange={handleChange} name="email" value={email}/>
            <ForInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
            <ForInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
            <ButtonComponent buttonType='google' type="submit">Sign up</ButtonComponent>
        </form>
    </div>
       
    </>
  )
}
export default SignUpForm;