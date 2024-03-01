import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            register({
              name: values.name,
              email: values.email,
              password: values.password,
            })
          );
          //   console.log({
          //     name: values.name,
          //     email: values.email,
          //     password: values.password,
          //   });
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" id={nameId} name="name" />
          <label htmlFor={emailId}>email</label>
          <Field type="text" id={emailId} name="email" />
          <label htmlFor={passwordId}>password</label>
          <Field type="password" id={passwordId} name="password" />
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
}
