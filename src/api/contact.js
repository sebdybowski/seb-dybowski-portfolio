import { fetcher, METHOD, URL } from './utils';

const getFormData = (email, message) => ({
  action: 'grunion-contact-form',
  'g23-name': 'sebdybowski.com',
  'g23-email': email,
  'g23-message': message,
  'contact-form-id': 23,
  'contact-form-hash': 'fb2b6c7575d28b273571372ea1114c919b9b54d5'
});

export const sendContactForm = (email, message) => {
  const { POST } = METHOD;
  const { CONTACT } = URL;

  const body = new FormData;
  const formData = getFormData(email, message);

  for (const key in formData) {
    body.append(key, formData[key]);
  }

  fetcher(CONTACT,  {
    method: POST,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
      'Content-Length': '<calculated when request is sent>'
    },
    body,
  });
};