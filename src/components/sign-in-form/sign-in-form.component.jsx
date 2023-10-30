import { useState } from "react"
import { signInWithGooglePopUp , createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-in-form.styles.scss'
import Button from "../button/button.component"


const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {email,password} = formFields

    const handleChange = (event) => {
        const {name,value} = event.target
        setFormFields({...formFields, [name]: value})
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopUp()
        createUserDocumentFromAuth(user);
    }

    const handleSubmit = async  (event) => {
        event.preventDefault()
        const response = await signInAuthUserWithEmailAndPassword(email, password)
        console.log(response);
        try{
            
            resetFormFields()
        } catch (err){
            switch(err.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break;
                default:
                    console.log(err);
            }
        }


    }

    return (
        <div className="sign-up-container">
            <h2> ALready have an account</h2>
            <span>Sign in with your email and password</span>
            <form action="" onSubmit={handleSubmit}>
               
                <FormInput label='Email' type="email" onChange={handleChange} value={email} name="email" required/>
                
                <FormInput label='Password' type="password" onChange={handleChange} value={password} name="password" required/>
                
                <div className="buttons-container">
                    <Button  type="submit"> sign in</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}> Google SIgn In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm
