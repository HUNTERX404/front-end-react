import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
function Register() {
  return (
    <Formik
      validationSchema={() => {
        return Yup.object({
          userName: Yup.string().required(""),
          email: Yup.string().email("").required(""),
          password: Yup.string().required("").min(6, ""),
          confirmPassword: Yup.string().oneOf([Yup.ref("password")]),
          phoneNumber: Yup.string().matches(/^[0-9]+$/, ""),
        });
      }}
      onSubmit={() => {}}
      initialValues={{
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
      }}
    ></Formik>
  );
}

export default Register;
