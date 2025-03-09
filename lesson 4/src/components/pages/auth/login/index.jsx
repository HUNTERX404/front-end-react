import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
function Login() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={() => {
        return Yup.object({
          email: Yup.string().required("enter your email"),
          password: Yup.string().min(5, "short").required("required"),
        });
      }}
      onSubmit={(values) => {
        console.log("values:", values);
      }}
    >
      {({ errors }) => {
        return (
          <Form className="container mx-auto grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email">email</label>
              <Field
                type="email"
                name="email"
                className="border py-2 px-1 rounded-lg"
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password">password</label>
              <Field
                type="password"
                name="password"
                className="border py-2 px-1 rounded-lg"
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
              <button type="submit">submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Login;
