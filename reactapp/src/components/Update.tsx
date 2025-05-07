import React from 'react';
import '../App.css';
import Form from './Form.tsx';

function Update() {
	return (
		<div>
			<h3>Edit Your Medication data in the form below:</h3>
			<Form method='update' />
		</div>
	);
}

export default Update;
