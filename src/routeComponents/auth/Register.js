import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useLoginUserMutation, useRegisterUserMutation } from '../../services/auth';
import { useNavigate } from 'react-router';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .required('No password provided.') 
    .min(3, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  
});

const Register = () => {
    const [createUser,craetreUserResponse] = useRegisterUserMutation()
    const navigate = useNavigate()
   
    const handleClick = () =>{
        console.log("nvigate to register page");
        navigate('/login')
    }
    return (

        <div>
            <h4>Signup</h4>
            <Formik
                initialValues={{
                    firstName: "",
                    email: "",//"shruti@gmail.com",
                    password: "" //"Shruti123"
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                    createUser(values)
                    navigate('/login ')
                    
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                      
                        <Field name="firstName" type="firstName"/>
                        {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
                        <br></br>
                        
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <br></br>
                        
                        <Field name="password" />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <br></br>

                        <button type="submit">Submit</button>
                        <button onClick={()=>handleClick()}>Sign In</button>

                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default Register