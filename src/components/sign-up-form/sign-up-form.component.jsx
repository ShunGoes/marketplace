import { useState} from "react"

import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component"
import './sign-up-form.styles.scss'
import Button from "../button/button.component"


// default stateless object
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {displayName,email,password,confirmPassword} = formFields


    // track changes in the form field
    const handleChange = (event) => {
        const {name,value} = event.target
        setFormFields({...formFields, [name]: value})
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async  (event) => {
        event.preventDefault()

        // confirm if password matches onSubmit
        if(password !== confirmPassword){
            alert('passwords do not match')
            return
        }

        try{
            // create new user with email and password. 
            // this function returns an object (user) that we can use for auth in the database
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
            resetFormFields()
            
            //  checks if user exist,if not create  a new user, return old user.
            // we use displayName to override the google's display name property
            await createUserDocumentFromAuth(user,{displayName})
        } catch (err){
            if(err.code === 'auth/email-already-in-use' ){
                alert('user has been logged before')
            } else{
                console.log(err.message);
            }
        }


    }
    return (
        <div className="sign-up-container">
            <h2> Don't have an account</h2>
            <span>Sign in with your email and password</span>
            <form action="" onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" onChange={handleChange} value={displayName} name="displayName" required/>

                <FormInput label='Email' type="email" onChange={handleChange} value={email} name="email" required/>
                
                <FormInput label='Password' type="password" onChange={handleChange} value={password} name="password" required/>
                
                <FormInput label='Confirm Password' type="password" onChange={handleChange} value={confirmPassword} name="confirmPassword" required/>

                <Button  type="submit"> sign up</Button>
            </form>
        </div>
    )
}

export default SignUp
