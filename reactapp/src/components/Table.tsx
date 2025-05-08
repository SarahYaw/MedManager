import React from "react";
import { medicationObject } from "../types/medication.tsx";
import TableRow from "./TableRow.tsx";
import { useState } from "react";


export default function Table(props: {rows:medicationObject[]}) {
    
    function addMedButton() {
        window.location.href = '/create/';
    }

    // use state for entries when sorted
    const [sortedRows, setSortRows] = useState(props.rows);


    // Function to sort the table by provider, refill date, or alphabetically
    function sortTable(event: React.ChangeEvent<HTMLSelectElement>) {
        const sortBy = event.target.value;
        let sortedArray = [...sortedRows]; // Create a new array to avoid mutating the original state
        if (sortBy === "provider") {
            sortedArray = sortedArray.sort((a, b) => a.provider.localeCompare(b.provider));
        } else if (sortBy === "willNeedRefillSoonest") {
            sortedArray = sortedArray.sort((a, b) => new Date(a.refilled).getTime() - new Date(b.refilled).getTime());
        } else if (sortBy === "alphabetical") {
            sortedArray = sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        }
        setSortRows(sortedArray); // Update the state with the new array
    }


    return (
        <div>
            <span className="table-header">
                <button onClick={addMedButton}>+ Add Medication</button>
                <span className="sort-by">Sort By:
                    <select name="sortBy" id="sortBy" onChange={sortTable}>
                        <option value="--">--</option>
                        <option value="provider">Provider</option>
                        <option value="willNeedRefillSoonest">Will Need Refill Soonest</option>
                        <option value="alphabetical">Alphabetical</option>
                    </select>
                </span>
            </span>
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
                    {sortedRows.map(function(row: medicationObject, index: number) {
                        // Use React.Fragment to avoid passing key down to TableRow but you can still use key
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