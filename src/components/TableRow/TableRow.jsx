import React from 'react';
import TableData from '../TableData/TableData';
class TableRow extends React.Component{
    constructor({data}){
        super()
        this.name = data.name
        this.salaryPerDay = data.salaryPerDay
        this.days = data.days
    }
    render(){
        return (
            <tr>
                <TableData data={this.name}/>
                <TableData data={this.days}/>
                <TableData data={this.salaryPerDay}/>
            </tr>   
        )
    }
}

export default TableRow;