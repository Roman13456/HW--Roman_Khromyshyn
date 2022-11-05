import React from 'react';
import TableRow from '../TableRow/TableRow';
class Table extends React.Component {
    constructor({ list }) {
        super()
        this.workers = list
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>days</th>
                        <th>salaryPerDay</th>
                    </tr>
                </thead>
                <tbody>
                    {this.workers.map(worker => <TableRow key={worker.id} data={worker} />)}
                </tbody>
            </table>
        )
    }
}

export default Table;
