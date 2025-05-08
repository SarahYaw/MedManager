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
        } else if (sortBy === "lastRefilled") {
            sortedArray = sortedArray.sort((a, b) => new Date(a.refilled).valueOf() - new Date(b.refilled).valueOf());
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
                        <option value="lastRefilled">Last Refilled</option>
                        <option value="alphabetical">Alphabetical</option>
                    </select>
                </span>
                <span className="key">
                    KEY: 
                    <span className='today'>Today</span> 
                    <span className='overdue'>Past Due</span> 
                    <span className='week'>Due This Week</span>
                    <span className='old'>Over A Year Since Last Refill</span>
                </span>
            </span>
            <table>
                <thead>
                    <tr>
                        <th className="wide">Name</th>
                        <th className="narrow">Dosage</th>
                        <th className="description">Description</th>
                        <th className="narrow">Morning Dose</th>
                        <th className="narrow">Afternoon Dose</th>
                        <th className="narrow">Evening Dose</th>
                        <th className="wide">Provider</th>
                        <th className="wide">Last Refilled</th>
                        <th className="wide">Actions</th>
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