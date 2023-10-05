import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

// const validate = (values) => {
//   const errors = {};
//   if (!values.username) {
//     errors.username = "Username is equired";
//   }
//   //   else if (values.username.length < 8) {
//   //     errors.username = "Must be 8 or more character";
//   //   }

//   if (!values.email) {
//     errors.email = "Email is required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 8) {
//     errors.password = "Must be 8 or more character";
//   }

//   return errors;
// };

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
  const formik = useFormik({
    initialValues,
    // validate,
    validationSchema,
    onSubmit,
  });
  return (
    <div className="wrapper">
      <h2>Login Form</h2>
      <form onSubmit={formik.handleSubmit} className="login-form">
        <div className="form-row mb-3">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="error">{formik.errors.username}</p>
            ) : null}
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error">{formik.errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="error">{formik.errors.password}</p>
            ) : null}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormikLoginYup;
