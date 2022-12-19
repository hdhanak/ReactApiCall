import React from 'react'
import { useGetAllUserQuery, useLoginUserMutation, useRegisterUserMutation } from '../services/auth';
import Cookies from 'js-cookie';


import GetUsers from './GetUsers';
const newData = {
    "firstName": "Shruti",
    "email": "shruti@gmail.com",
    "password": "Shruti123"
   
}
const login = {
  "email": "shruti@gmail.com",
  "password": "Shruti123"
}
function Authoriz() {
    const getUser = useGetAllUserQuery()
    const [createUser,craetreUserResponse] = useRegisterUserMutation()
    const [loginUser , loginResponse] = useLoginUserMutation()
    
    localStorage.setItem('token',loginResponse?.data?.access_token);


    console.log(Cookies.get('access_token'))    
    console.log(loginResponse,'loginResponse');

  return (
    <div>
        <button onClick={()=>createUser(newData)}>register</button>
        <button onClick={()=>loginUser(login)}> Login hear....</button>
       <GetUsers/>
    </div>
  )
}

export default Authoriz