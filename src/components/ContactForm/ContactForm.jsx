import React from "react";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(3, "Too short").max(50, "Too long"),

    number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone must be number in xxx-xx-xx format")
        .required("Phone number is required")
        .min(3, "Too short").max(50, "Too long"),
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
                        <ErrorMessage className={css.errorMessage} name="name" component="span" />
                    </div>
                    <div className={css.contactFormItem}>
                        <label htmlFor={numberlFieldId}>Phone</label>
                        <Field
                            id={numberlFieldId}
                            name="number"
                            type="tel"
                            inputMode="numeric"
                        />
                        <ErrorMessage className={css.errorMessage} name="number" component="span" />
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
