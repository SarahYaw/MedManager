import { medicationObject } from "../types/medication.ts";
import axios from 'axios';
import * as React from 'react';

function onEditClick(id: number) {
    window.location.href = "/update/" + id;
}

function onDeleteClick(id: number) {
    window.location.href = "/delete/" + id;
}   

function onRefillClick(id: number) {
    axios.patch('http://localhost:4000/api/update/' + id, { refilled: new Date().toISOString() })
        .then((response) => {
            if (response.status === 200) {
                window.location.href = '/';
            } else {
                console.error('Error submitting data:', response.statusText);
            }
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        }
    );  
}

export default function TableRow(props: { medication: medicationObject}) {
    return (
        <tr>
            <td>{props.medication.name}</td>
            <td>{props.medication.dosage}</td>
            <td>{props.medication.description}</td>
            <td>{props.medication.morning}</td>
            <td>{props.medication.afternoon}</td>
            <td>{props.medication.evening}</td>
            <td>{props.medication.provider}</td>
            <td>{props.medication.refilled.toLocaleString()}</td>
            <td className="action-col">
                <button type="button" onClick={() => onRefillClick(props.medication.id)}>Refilled Today!</button>
                <button type="button" onClick={() => onEditClick(props.medication.id)}>Edit</button>
                <button type="button" onClick={() => onDeleteClick(props.medication.id)}>Delete</button>
            </td>
        </tr>
    )
}