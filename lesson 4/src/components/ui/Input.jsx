import { Field } from "formik";
import React from "react";

function Input({ title, name, type = "text" }) {
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <Field type={type} name={name} className="border py-2 px-1 rounded-lg" />
      {/* {errors.email && <p>{errors.email}</p>} */}
    </div>
  );
}

export default Input;
