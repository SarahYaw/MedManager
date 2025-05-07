import React from 'react';
import '../App.css';
import Form from './Form.tsx';

function Create() {
  return (
    <div>
      <h3>Add Your Medication data in the form below:</h3>
      <Form method='create' />
    </div>
  );
}

export default Create;
