import React from 'react';
import '../App.css';
import axios from 'axios';

function Create() {

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.refilled = new Date(data.refilled as string).toISOString()

    axios.post('http://localhost:4000/api/create', data)
    .then((response) => {
      if (response.status === 200) {
        window.location.href = '/';
      } else {
        console.error('Error submitting data:', response.statusText);
      }
    }
    )
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  }

  return (
    <div>
      <h3>Add Your Medication data in the form below:</h3>
      <form onSubmit={handleSubmit} method="POST" action="/create/">
        <label for='name'>Name:</label>
        <input type="text" name="name" />
        <label for='dosage'>Dosage:</label>
        <input type="text" name="dosage" />
        <label for='description'>Description:</label>
        <input type="textarea" name="description" />
        <label for='morning'>Morning Dose:</label>
        <input type="decimal" name="morning" />
        <label for='afternoon'>Afternoon Dose:</label>
        <input type="decimal" name="afternoon" />
        <label for='evening'>Evening Dose:</label>
        <input type="decimal" name="evening" />
        <label for='provider'>Provider:</label>
        <input type="text" name="provider" />
        <label for='quantity'>Quantity:</label>
        <input type="text" name="quantity" />
        <label for='refilled'>Last Refilled:</label>
        <input type="date" name="refilled" />
        <span className="buttons">
          <button type="submit">Save Medication</button>
          <button type="reset">Clear Form</button>
          <button type="button" onClick={() => window.location.href = '/'}>Cancel</button>
        </span>
      </form>
    </div>
  );
}

export default Create;
