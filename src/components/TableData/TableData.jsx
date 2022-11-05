import React from "react"
class TableData extends React.Component{
    constructor({data}){
        super()
        this.data = data

    }
    render(){
        return (
            <td>{this.data}</td>   
        )
    }
}

export default TableData;