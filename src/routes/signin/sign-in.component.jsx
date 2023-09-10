import SignUpForm from '../../components/sign up-form/sign-up-form.component';
import {signInWithGooglePopUp,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp()
       const userDocRef =  createUserDocumentFromAuth(user);
    }
 
    return (
        <div>
            <h2>Signin page</h2>
            <button onClick={logGoogleUser}>
                sign in 
            </button>

            <SignUpForm/>
        </div>
    )
}

export default SignIn