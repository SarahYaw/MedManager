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
        const morning:number = Number(props.medication.morning) || 0;
        const afternoon:number = Number(props.medication.afternoon) || 0;
        const evening:number = Number(props.medication.evening) || 0;

        // get days since last refill
        const daysSinceRefill = Math.floor((today.getTime() - lastRefill.getTime()) / (1000 * 3600 * 24));
        const dosesUsedPerDay = morning + afternoon + evening;
        const daysPerRefill = props.medication.quantity / dosesUsedPerDay;
        const daysUntilRefill = daysPerRefill - daysSinceRefill;
        
        if (daysUntilRefill === 0) {
            return "today";
        } else if (daysUntilRefill < 0) {
            return "overdue";
        } else if (daysUntilRefill < 7) {
            return "week";
        } else if (daysSinceRefill > 365) {
            return "old";
        }
    }

    function displayDateNicely() {
        const date = new Date(props.medication.refilled);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
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
            <td>{displayDateNicely()}</td>
            <td>
                <span  className="action-col">
                    <button type="button" onClick={() => onRefillClick(props.medication.id)}>Refilled Today!</button>
                    <button type="button" onClick={() => onEditClick(props.medication.id)}>Edit</button>
                    <button type="button" onClick={() => onDeleteClick(props.medication.id)}>Delete</button>
                </span>
            </td>
        </tr>
    )
}