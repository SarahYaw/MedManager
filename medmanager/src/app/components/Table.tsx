import TableRow from "./TableRow"

export default function Table() {
    let rows = [
        {
            'name':'Anti-Inflammatory',
            'refilled':'Feb 27 2025',
            'quantity':90,
            'dosage':'500 Mg',
            'morning':1,
            'afternoon':0,
            'evening':0.5,
            'description':'large orange tablet',
            'provider':'Rhumatologist'
        },
        {
            'name':'Anti-Depressant',
            'refilled':'Feb 27 2025',
            'quantity':90,
            'dosage':'60 Mg',
            'morning':1,
            'afternoon':0,
            'evening':0,
            'description':'orange and green capsule',
            'provider':'Primary'
        },
        {
            'name':'Anti-Depressant (supplemental)',
            'refilled':'Mar 4 2025',
            'quantity':90,
            'dosage':'30 Mg',
            'morning':1,
            'afternoon':0,
            'evening':0,
            'description':'white and green capsule',
            'provider':'Primary'
        },
        {
            'name':'Diuretic',
            'refilled':'Feb 27 2025',
            'quantity':90,
            'dosage':'50 Mg',
            'morning':1,
            'afternoon':0,
            'evening':0,
            'description':'small white tablet',
            'provider':'Gynocologist'
        },
        {
            'name':'Hormone Regulator',
            'refilled':'Feb 27 2025',
            'quantity':90,
            'dosage':'N/A',
            'morning':1,
            'afternoon':0,
            'evening':0,
            'description':'full dose is small blue tablet; partial dose is small white tablet, placebo dose is brown tablet',
            'provider':'Gynocologist'
        },
        {
            'name':'Rescue Inhailer',
            'refilled':'Nov 26 2024',
            'quantity':180,
            'dosage':'2.5 Mg/3Ml Soln',
            'morning':0,
            'afternoon':0,
            'evening':0,
            'description':'take as needed',
            'provider':'Primary'
        },
        {
            'name':'Anti-Fungal Cream',
            'refilled':'Feb 2 2025',
            'quantity':0,
            'dosage':'N/A',
            'morning':0,
            'afternoon':0,
            'evening':0,
            'description':'use as needed',
            'provider':'Dermatologist'
        }
    ]

    return (
        <div>
            <p>Add Medication Button</p>
            <p>Add ability to sort by "provider", "will need refill soonest", "alphabetical"</p>
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
                    {rows.map(function(row, index) {
                        return <TableRow medication={row} key={index}></TableRow>
                    })}
                </tbody>
            </table>
        </div>
    )
}