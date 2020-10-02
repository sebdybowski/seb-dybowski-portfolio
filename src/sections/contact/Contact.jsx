import React from 'react';
import { object, string } from 'yup';
import { Formik, Form } from 'formik';
import { isEmpty } from 'ramda';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { SectionLayout } from '../../components/layouts';
import { TextInput, TextArea } from '../../components/fields';
import { sendContactForm } from '../../api';

const CONTACT_FORM_SCHEMA = object().shape({
  email: string().email().required(),
  message: string().required(),
});

export const Contact = () => (
  <SectionLayout>
    <div className="container">
      <Formik
        initialValues={{ email: '', message: '' }}
        validationSchema={CONTACT_FORM_SCHEMA}
        onSubmit={({ email, message }) => sendContactForm(email, message)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          // handleSubmit,
          // isSubmitting,
        }) => (
          <Form className="has-text-centered">
            <TextInput
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email
          && (
          <p className="help is-danger">
            {errors.email}
          </p>
          )}
            <br />
            <TextArea
              type="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.message && errors.message
          && (
          <p className="help is-danger">
            {errors.message}
          </p>
          )}
            <br />
            <div className="control">
              <button
                type="submit"
                className="button is-primary is-rounded is-large pl-6 pr-6"
                disabled={!isEmpty(errors) || isEmpty(touched)}
              >
                <span className="is-capitalized mr-2">send</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </SectionLayout>
);
