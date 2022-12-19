import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useLoginUserMutation } from '../services/auth';

const SignupSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),

});

export const FormFormik = () => {
  const [loginUser , loginResponse] = useLoginUserMutation()
  console.log(loginResponse,'loginResponse');
  if(loginResponse.isSuccess==true){
    localStorage.setItem('token',loginResponse.data?.access_token)
}
  return(
  
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        email: "",//"shruti@gmail.com",
        password:"" //"Shruti123"
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
)};