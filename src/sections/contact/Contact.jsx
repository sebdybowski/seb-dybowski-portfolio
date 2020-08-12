import React, { useState } from 'react';
import { SectionLayout } from '../../components/layouts';
import { TextInput, TextArea } from '../../components/fields/';
import { Form } from '../../components/form/Form';
import { sendContactForm } from '../../api';

export const Contact = () => {
  const [ email, setEmail ] = useState();
  const [ message, setMessage ] = useState();

  console.log(email, message);
  return (
    <SectionLayout>
      <Form>
        <TextInput onChange={event => setEmail(event.target.value)} />
        <TextArea onChange={event => setMessage(event.target.value)} />
        <button
          type="button"
          onClick={() => sendContactForm(email, message)}
          disabled={!email || !message}
        >send</button>
      </Form>
    </SectionLayout>
  );
};
