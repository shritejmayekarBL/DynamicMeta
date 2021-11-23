import React from 'react';
import { Helmet } from 'react-helmet';

export default function ChildComponent() {
  return (
    <div>
      <Helmet>
        <title>Modified Title</title>
        <meta name="description" content="Basic example" />

      </Helmet>
      <h1>Child Component</h1>
    </div>
  )
}