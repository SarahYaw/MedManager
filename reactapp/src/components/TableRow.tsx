import { medicationObject } from "../types/medication.ts";
import * as React from 'react';

function onEditClick(id: number) {
    window.location.href = "/update/" + id;
}
function onDeleteClick(id: number) {
    console.log("Delete button clicked");
}
function onRefillClick(id: number) {
    console.log("Refill button clicked");
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
            <td>
                <button type="button" onClick={() => onRefillClick(props.medication.id)}>Refilled Today!</button>
                <button type="button" onClick={() => onEditClick(props.medication.id)}>Edit</button>
                <button type="button" onClick={() => onDeleteClick(props.medication.id)}>Delete</button>
            </td>
        </tr>
    )
}