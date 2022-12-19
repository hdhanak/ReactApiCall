import React from 'react'
import { useGetAllUserQuery } from '../services/auth'
import { useAllRegistedQuery } from '../services/getUser';

const GetUsers = () => {
  
  const { data, isLoading,isSuccess,isError,error } = useAllRegistedQuery()

  const handleGetUsers = () => {
    console.log(data.data, 'data');
  }

  let content
 
  if (isLoading) {
    content = "Loading..."
  } else if (isSuccess) {
    content = data?.data?.map((user) => <h6>{user.firstName}</h6>)
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  

  return (
    <div>
      <h6>GetUsers</h6>
      <button onClick={() => handleGetUsers()}>GetAllUsers</button>
      {
        content
      }
    </div>

  )
}

export default GetUsers