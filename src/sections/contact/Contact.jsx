import React from 'react';
import { SectionLayout } from '../../components/layouts';
import { TextInput, TextArea } from '../../components/fields/';
import { Form } from '../../components/form/Form';

export const Contact = () => <SectionLayout>
  <Form>
    <TextInput/>
    <TextArea/>
  </Form>
</SectionLayout>;
