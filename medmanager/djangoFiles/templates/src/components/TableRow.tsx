import { medicationObject } from "../../../types/medication";

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
            <td>Edit Button    Delete Button</td>
        </tr>
    )
}