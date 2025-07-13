import React from "react";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .matches(
            /^[A-Za-z]+(?:\s[A-Za-z]+)+$/,
            "Name must include first and last name with space"
        )
        .required("Name is required"),

    number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone must be in xxx-xx-xx format")
        .required("Phone number is required"),
});

const ContactForm = ( {onAddContact}) => {
    const initialValues = { name: "", number: "" };

    const handleSubmit = (values, actions) => {
        onAddContact(values);
        actions.resetForm();
    };

    const nameFieldId = useId();
    const numberlFieldId = useId();

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
            >
                <Form className={css.contactFormContainer}>
                    <div className={css.contactFormItem}>
                        <label htmlFor={nameFieldId}>Name</label>
                        <Field type="text" id={nameFieldId} name="name" />
                        <ErrorMessage name="name" component="span" />
                    </div>
                    <div className={css.contactFormItem}>
                        <label htmlFor={numberlFieldId}>Phone</label>
                        <Field
                            id={numberlFieldId}
                            name="number"
                            type="tel"
                            inputMode="numeric"
                        />
                        <ErrorMessage name="number" component="span" />
                    </div>

                    <button className={css.submitButton} type="submit">
                        Add Contact
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
