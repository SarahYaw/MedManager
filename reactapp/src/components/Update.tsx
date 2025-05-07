import React from 'react';
import '../App.css';
import axios from 'axios';

function Update() {

	function getIdFromUrl() {
		const url = window.location.href;
		const id = url.substring(url.lastIndexOf('/') + 1);
		return id;
	}

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());
		data.refilled = new Date(data.refilled as string).toISOString()

		axios.patch('http://localhost:4000/api/update/'+getIdFromUrl(), data)
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

	getCurrentInfo();
	return (
		<div className="update">
			<h3>Edit Your Medication data in the form below:</h3>
			<form onSubmit={handleSubmit} method="PATCH">
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
					<input type="decimal" name="morning" />
				</label>
				<label>
					Afternoon Dose:
					<input type="decimal" name="afternoon" />
				</label>
				<label>
					Evening Dose:
					<input type="decimal" name="evening" />
				</label>
				<label>
					Provider:
					<input type="text" name="provider" />
				</label>
				<label>
					Quantity:
					<input type="text" name="quantity" />
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

export default Update;
