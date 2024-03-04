import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
// import { nanoid } from "nanoid";
import * as yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import toast from 'react-hot-toast';
// import { nanoid } from '@reduxjs/toolkit';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const validationFormSchema = yup.object().shape({
  name: yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Requiered'),
  number: yup.string().required('Required'),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  // addContacts;
  // const handleSubmit = event => {
  //   event.preventDefault();
  //     // dispatch(addContacts());
  //     form.reset();
  // };
  // const model = nanoid();
  return (
    <div className={css.container}>
      <Formik
        validationSchema={validationFormSchema}
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          //   console.log(values);
          const contacts = {
            // id: nanoid(),
            name: values.name,
            number: values.number,
          };
          //   dispatch(addContacts(contacts));
          //   onAdd({ id: model, ...values });
          dispatch(addContact(contacts))
            .unwrap()
            .then(() => toast('Succseful'))
            .catch(() => toast('Not succseful'));
          actions.resetForm();
        }}
      >
        <Form>
          <div>
            <div className={css.inputBox}>
              <label className={css.text} htmlFor={nameId}>
                Name
              </label>
              <Field className={css.input} type="text" id={nameId} name="name" />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className={css.inputBox}>
              <label className={css.text} htmlFor={numberId}>
                Number
              </label>
              <Field className={css.input} type="text" id={numberId} name="number" />
              <ErrorMessage name="number" component="span" />
            </div>
            <Button
              className={css.button}
              type="submit"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Add Contact
            </Button>
            {/* <button className={css.button} type="submit">
              Add Contact
            </button> */}
          </div>
        </Form>
      </Formik>
    </div>
  );
}
