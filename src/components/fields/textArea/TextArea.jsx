import React from 'react';

export const TextArea = (props) => (
  <div>
    <label className="label">Your message</label>
    <textarea className="textarea is-large is-rounded" rows="3" placeholder="type here..." maxLength={255} style={{ borderRadius: '1.25em' }} {...props} />
  </div>
);
