import React from 'react';
import '../App.css';
import axios from 'axios';

function Form(props: { method: string }) {
	function getIdFromUrl() {
		const url = window.location.href;
		const id = url.substring(url.lastIndexOf('/') + 1);
		return id;
	}

	function getCurrentInfo() {
		axios.get('http://localhost:4000/api/' + getIdFromUrl())
			.then((response) => {
				if (response.status === 200) {
					// Optionally, populate the form with the retrieved data here
					const data = response.data;
					const form = document.querySelector('form');
					if (form) {
						// verbose for name because it wanted to access the name of the form instead of the name of the medication
						(form.elements.namedItem('name') as HTMLInputElement).value = data.name;
						form.dosage.value = data.dosage;
						form.description.value = data.description;
						form.morning.value = data.morning;
						form.afternoon.value = data.afternoon;
						form.evening.value = data.evening;
						form.provider.value = data.provider;
						form.quantity.value = data.quantity;
						form.refilled.value = new Date(data.refilled).toISOString().split('T')[0]; // Format date for input
					}
				} else {
					console.error('Error retrieving data:', response.statusText);
				}
			})
			.catch((error) => {
				console.error('There has been a problem with your fetch operation:', error);
			});
	}

    function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());
		data.refilled = new Date(data.refilled as string).toISOString()

        if (props.method === 'create') {
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
        } else if (props.method === 'update') {
		    axios.patch('http://localhost:4000/api/update/' + getIdFromUrl(), data)
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
        } else {
            console.error('Invalid method:', props.method);
        }
    }

    if (props.method === 'update') {
	    getCurrentInfo();
    }

	return (
		<div>
			<form onSubmit={handleSubmit}>
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
					<button type="submit">Save Changes</button>
					<button type="reset">Clear Form</button>
					<button type="button" onClick={() => window.location.href = '/'}>Cancel</button>
				</span>
			</form>
		</div>
	);
}

export default Form;
