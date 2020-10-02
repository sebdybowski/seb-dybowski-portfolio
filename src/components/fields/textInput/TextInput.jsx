import React from 'react';

export const TextInput = (props) => (
  <div className="field">
    <label className="label">Email address</label>
    <input type="email" placeholder="type here..." className="input is-rounded is-large" {...props} />
  </div>
);
