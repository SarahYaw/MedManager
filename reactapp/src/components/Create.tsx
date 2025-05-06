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
        console.log('Data submitted successfully:', response.data);
        // Optionally, redirect or update the UI here
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
    <div className="create">
      <h3>Add Your Medication data in the form below:</h3>
      <form onSubmit={handleSubmit} method="POST" action="/create/">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Dosage:
          <input type="text" name="dosage" />
        </label>
        <label>
          Description:
          <input type="textarea" name="description" />
        </label>
        <label>
          Morning Dose:
          <input type="number" name="morning" />
        </label>
        <label>
          Afternoon Dose:
          <input type="number" name="afternoon" />
        </label>
        <label>
          Evening Dose:
          <input type="number" name="evening" />
        </label>
        <label>
          Provider:
          <input type="text" name="provider" />
        </label>
        <label>
          Last Refilled:
          <input type="date" name="refilled" />
        </label>
        <button type="submit">Submit</button>
        <button type="reset">Reset Form</button>
        <button type="button" onClick={() => window.location.href = '/'}>Back</button>
      </form>
    </div>
  );
}

export default Create;
