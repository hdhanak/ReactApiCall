import React from 'react'
import { useNavigate } from 'react-router'

const Hello = () => {
    const navigate = useNavigate()
    const handleClick = () =>{
        console.log("nvigate to register page");
        navigate('/register')
    }
  return (
    <div>
        <h5>Hello welcome ...do regisetr here</h5>
        <button onClick={()=>handleClick()}>Go To Regsiter page</button>
    </div>
  )
}

export default Hello