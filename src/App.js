import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Username should be an email').required('Field required'),
      password: Yup.string().required('Field required'),
    }),
    onSubmit: values => {
      alert("Login Successful");
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email</label>
          <input
            id="emailField"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div id="emailError">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="pswField">Password</label>
          <input
            id="pswField"
            type="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div id="pswError">{formik.errors.password}</div>
          ) : null}
        </div>
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
