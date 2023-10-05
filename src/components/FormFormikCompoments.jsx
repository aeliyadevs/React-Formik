import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .max(15, "Must be less than 15 characters long"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be 8 or more characters"),
});

const FormikLoginYup = () => {
  return (
    <Formik
      className="wrapper"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <h2>Login Form</h2>
      <Form className="login-form">
        <div className="form-row mb-3">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field
              className="form-control"
              id="username"
              name="username"
              type="text"
            />
            <ErrorMessage name="username" />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <Field
              className="form-control"
              id="email"
              name="email"
              type="email"
            />
            <ErrorMessage name="email" />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              className="form-control"
              id="password"
              name="password"
              type="password"
            />
            <ErrorMessage name="password" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default FormikLoginYup;
