import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be 8 or more characters"),
});

const FormFormikCompoments = () => {
  return (
    <div className="wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="login-form">
          <h2>Login Form</h2>
          <div className="form-row mb-3">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <Field
                className="form-control"
                id="email"
                name="email"
                type="email"
              />
              <p className="error">
                <ErrorMessage name="email" />
              </p>
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
              <p className="error">
                <ErrorMessage name="password" />
              </p>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default FormFormikCompoments;
