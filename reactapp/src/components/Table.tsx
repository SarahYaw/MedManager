import React from "react";
import { medicationObject } from "../types/medication.tsx";
import TableRow from "./TableRow.tsx";


export default function Table(props: {rows:medicationObject[]}) {
    
    function createMed() {
        // route user to the create page
        window.location.href = '/create/';
    }

    return (
        <div>
            <button onClick={createMed}>+ Add Medication</button>
            {/* Add ability to sort by "provider", "will need refill soonest", "alphabetical" */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Dosage</th>
                        <th>Description</th>
                        <th>Morning Dose</th>
                        <th>Afternoon Dose</th>
                        <th>Evening Dose</th>
                        <th>Provider</th>
                        <th>Last Refilled</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.rows.map(function(row: medicationObject, index: number) {
                        // Use React.Fragment to avoid passing key down to TableRow
                        return (
                            <React.Fragment key={index}>
                                <TableRow medication={row} />
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}