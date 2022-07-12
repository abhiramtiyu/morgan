import SignUpForm from '../../component/sign-upform/SignUpForm';
import SignInForm from '../../component/sign-inform/SignInForm';
import "./authentication.scss";
import {
  signInwithGooglePopup,
  createUserDocumentFromAuth} from '../../utils/firebase/firebase.util'

export const Authentication = () => {

  const googleUser = async () =>{ 
    const {user}  =await  signInwithGooglePopup();
    const userDocRef  = await createUserDocumentFromAuth(user)
  };
  return (
    <div className='authentication-page'>
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}
