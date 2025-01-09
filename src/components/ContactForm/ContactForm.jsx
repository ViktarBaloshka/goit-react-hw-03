import clsx from "clsx";
import s from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
  const re = /^\d{3}-\d{2}-\d{2}$/;
  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(re, "Enter the number. Example: 111-11-11 ")
      .required("Required"),
  });

  const handleSubmit = (values, action) => {
    onAdd({
      ...values,
      id: nanoid(),
    });
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={clsx(s.form)}>
        <label className={clsx(s.label)} name="name">
          Name
        </label>
        <Field className={clsx(s.input)} type="text" name="name" />
        <ErrorMessage name="name" className={clsx(s.error)} component="div" />
        <label className={clsx(s.label)} name="number">
          Number
        </label>
        <Field className={clsx(s.input)} type="text" name="number" />
        <ErrorMessage name="number" className={clsx(s.error)} component="div" />
        <button className={clsx(s.button)} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
