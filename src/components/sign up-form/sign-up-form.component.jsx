import { useState } from "react"
import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {displayName,email,password,confirmPassword} = formFields

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
        <div>
            <h2> Sign in with your email and password</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <input type="text" onChange={handleChange} value={displayName} name="displayName" required/>

                <label htmlFor=""> Email</label>
                <input type="email" onChange={handleChange} value={email} name="email" required/>
                
                <label htmlFor="">Password </label>
                <input type="password" onChange={handleChange} value={password} name="password" required/>
                
                <label htmlFor=""> Confirm Password</label>
                <input type="password" onChange={handleChange} value={confirmPassword} name="confirmPassword" required/>

                <button type="submit"> sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm