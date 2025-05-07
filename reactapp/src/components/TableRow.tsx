import { medicationObject } from "../types/medication.ts";
import axios from 'axios';
import * as React from 'react';

export default function TableRow(props: { medication: medicationObject}) {
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
    
    function getRefillStatus() {
        const today = new Date();
        const lastRefill = new Date(props.medication.refilled);
        // get days since last refill
        const daysSinceRefill = Math.floor((today.getTime() - lastRefill.getTime()) / (1000 * 3600 * 24));
        const dosesUsedPerDay = props.medication.morning + props.medication.afternoon + props.medication.evening;
        const totalDosesUsed = daysSinceRefill * dosesUsedPerDay;
        // quantity left in the bottle
        const quantityLeft = props.medication.quantity - totalDosesUsed;
        const daysUntilRefill = Math.floor(quantityLeft / dosesUsedPerDay);
        
        if (daysUntilRefill === 0) {
            return "today";
        }
        if (daysUntilRefill < 0) {
            return "overdue";
        }
        if (daysUntilRefill < 7) {
            return "week";
        }
        
    }

    return (
        <tr className={getRefillStatus()}>
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