import React, { useState } from 'react'
import { useLoginUserMutation } from '../services/auth'

const FormData = () => {
    const [loginUser , loginResponse] = useLoginUserMutation()
    const [inputs, setInputs] = useState({
        email: "",//"shruti@gmail.com",
        password:"" //"Shruti123"
    })

    console.log(loginResponse,'loginResponse');
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs((values) => {
            console.log({...values, [name]: value},'va;ues');
            return { ...values, [name]: value }
        }
    
         )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(inputs)
        console.log(inputs, 'inputs');
    }


if(loginResponse.isSuccess==true){
     localStorage.setItem('token',loginResponse.data?.access_token)
}
    return (
        <>
            <div>FormData</div>
            <form onSubmit={handleSubmit}>
                <label >email
                    <input type="email" value={inputs.email || ""} onChange={handleChange} name="email"></input></label>

                <label >password
                    <input type="password" value={inputs.password || ""} onChange={handleChange} name="password"></input></label>

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default FormData