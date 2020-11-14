import React from 'react';
import Typewriter from '../../components/effects/typewriter/Typewriter';

export const Welcome = () => (
  <section className="hero is-transparent is-large">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-size-1">
          <Typewriter prefix={<span>{'>_ '}</span>}>Hello, world!</Typewriter>
        </h1>
        <h2 className="subtitle is-size-4">
          Welcome on my Page!
        </h2>
      </div>
    </div>
  </section>
);
