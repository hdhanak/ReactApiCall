import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useLoginUserMutation, useRegisterUserMutation } from '../../services/auth';
import { useNavigate } from 'react-router';

const SignupSchema = Yup.object().shape({
   
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .required('No password provided.') 
    .min(3, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  
});

const Login = () => {
   const [loginUser,loginResponse] = useLoginUserMutation()
    const navigate = useNavigate()
    console.log(loginResponse,'loginResponse');
    if(loginResponse.isSuccess==true){
        localStorage.setItem('token',loginResponse.data?.access_token)
        navigate('/auth ')
    }
    return (

        <div>
            <h4>Login </h4>
            <Formik
                initialValues={{                  
                    email: "",//"shruti@gmail.com",
                    password: "" //"Shruti123"
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                    loginUser(values)           
                                       
                }}
            >
                {({ errors, touched }) => (
                    <Form>                     
                                            
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <br></br>
                        
                        <Field name="password" />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <br></br>

                        <button type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default Login