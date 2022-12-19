import logo from './logo.svg';
import './App.css';
import { useCreatePostMutation, useDeletePostMutation, useDeletePostQuery, useGetAllPostQuery, useGetPostByIdQuery, useGetPostByPaginationQuery, useUpdatePostMutation } from './services/post'
import Authoriz from './components/Authoriz';
import GetUsers from './components/GetUsers';
import FormData from './components/FormData';
import { FormFormik } from './components/FormFormik';
import { Route, Routes } from 'react-router';


import Home from './routeComponents/Home';
import About from './routeComponents/About';
import { BrowserRouter, Link } from 'react-router-dom';
import Layout from './routeComponents/Layout';
import Register from './routeComponents/auth/Register';
import Login from './routeComponents/auth/Login';
import Hello from './routeComponents/Hello';
import Protected from './routeComponents/Protected';

function App() {

    //   const responce = useGetAllPostQuery()


    const userResponce = useGetPostByIdQuery(5)
    const responce = useGetPostByPaginationQuery(5)
    const [deletePost, responceInfo] = useDeletePostMutation()
    const [createPost, createResponce] = useCreatePostMutation()

    const newPost = {
        id: 10,
        name: "jikdjfiwe"
    }
    const updatePostData = {
        id: 10,
        name: "shruti"
    }
    const [updatePost, updateResponce] = useUpdatePostMutation()




    // console.log(updateResponce,'updateResponce create');
    //   console.log(userResponce,'userResponce');
    //   console.log("pagainationData",pagainationData);

    if (responce.isLoading) return <div>Loading......</div>
    if (responce.error) return <h1>an error with api</h1>

let isLoggedIn = false

    return (
        <div className="App">
            <h1>
                {/* <table>
                <tr>
                    <th>Company</th>
                    <th>title</th>
                   
                </tr>
                {
                    responce.data?.map((ele, index) => {
                        return (
                            <>
                            <tbody>

                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                   
                                </tr>
                            </tbody>

                            </>
                        )
                    })
                }
            </table> */}

                {/* 
            <button onClick={()=>deletePost(2)}>delete user 2</button>
            <button onClick={()=>createPost(newPost)}>Add User</button>
            <button onClick={()=>updatePost(updatePostData)}>update Post</button> */}

                {/* <Authoriz/> */}
                {/* <GetUsers/> */}
                {/* <FormData/> */}
                {/* <FormFormik/> */}

                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Hello />}></Route>
                        <Route path='register' element={<Register />}></Route>
                        <Route path='login' element={<Login />}></Route>
                        <Route path="/auth" element={<Layout />}>
                            <Route path='home' element={
                            <Protected isLoggedIn={isLoggedIn}>

                                <Home /> 

                            </Protected>
                            }
                            />
                            <Route path="getUser" element={<GetUsers />} />

                        </Route>
                    </Routes>
                </BrowserRouter>

            </h1>
        </div>
    );
}

export default App;
