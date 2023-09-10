import { useState } from "react"

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

    return (
        <div>
            <h2> Sign in with your email and password</h2>
            <form action="" onSubmit={() => {}}>
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