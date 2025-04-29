import { medicationObject } from "../../../types/medication";
import TableRow from "./TableRow.tsx";


export default function Table(props: {rows:medicationObject[]}) {
    return (
        <div>
            <p>Add Medication Button</p>
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
                    {props.rows.map(function(row, index) {
                        return <TableRow medication={row} key={index}></TableRow>
                    })}
                </tbody>
            </table>
        </div>
    )
}