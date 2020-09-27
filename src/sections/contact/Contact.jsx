import React, { useEffect, useState } from 'react';
import { SectionLayout } from '../../components/layouts';
import { TextInput, TextArea } from '../../components/fields/';
import { Form } from '../../components/form/Form';
import { sendContactForm } from '../../api';
import { object, string } from 'yup';

const CONTACT_FORM_SCHEMA = object().shape({
  email: string().email().required(),
  message: string().required()
});

export const Contact = () => {
  const [ email, setEmail ] = useState();
  const [ message, setMessage ] = useState();
  const [ isValid, setIsValid ] = useState(false);

  useEffect(() => {
    CONTACT_FORM_SCHEMA.isValid({ email, message }).then(setIsValid);
  });

  return (
    <SectionLayout>
      <Form>
        <TextInput onChange={event => setEmail(event.target.value)} />
        <TextArea onChange={event => setMessage(event.target.value)} />
        <button
          type="button"
          onClick={() => sendContactForm(email, message)}
          disabled={!isValid}
        >send</button>
      </Form>
    </SectionLayout>
  );
};
