import React from 'react';
import '../App.css';
import axios from 'axios';
import { medicationObject } from '../types/medication';

function Create() {

    function handleSubmit(event) {
        event.preventDefault();
        axios.delete('http://localhost:4000/api/delete/' + medicationId)
        .then((response) => {
            if (response.status === 200) {
                window.location.href = '/';
            } else {
                console.error('Error deleting data:', response.statusText);
            }
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        })
    }

    const medicationId = window.location.pathname.split('/').pop(); // Get the medication ID from the URL
    const [medObject, setMedObject] = React.useState<medicationObject | null>(null); // State to store the medication object

    React.useEffect(() => {
        async function getMedObject() {
        try {
            const response = await axios.get('http://localhost:4000/api/' + medicationId);
            if (response.status === 200) {
            setMedObject(response.data);
            } else {
            console.error('Error fetching data:', response.statusText);
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
        }
        getMedObject();
    }, [medicationId]); // Fetch data when the component mounts or medicationId changes

    function getQuestionData() {
    if (!medObject) {
        return <p>Loading...</p>; // Show a loading message while fetching data
    }

    function displayDateNicely() {
        const date = new Date(medObject.refilled);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }

    return (
        <span>
            <h3> Are you sure you wish to remove <span className='med-name'>{medObject.name}</span> from your medication list?</h3>
            <p>Dosage: {medObject.dosage}</p>
            <p>Description: {medObject.description}</p>
            <p>Morning: {medObject.morning ? 'Yes' : 'No'}</p>
            <p>Afternoon: {medObject.afternoon ? 'Yes' : 'No'}</p>
            <p>Evening: {medObject.evening ? 'Yes' : 'No'}</p>
            <p>Provider: {medObject.provider}</p>
            <p>Refilled: {displayDateNicely()}</p>
            <p>Quantity: {medObject.quantity}</p>
        </span>
    );
    }

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST" action="/create/" className="delete-form">
        {getQuestionData()}
        <span className="buttons">
            <button type="submit">YES</button>
            <button type="button" onClick={() => window.location.href = '/'}>NO</button>
        </span>
      </form>
    </div>
  );

}

export default Create;
