import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {nanoid} from 'nanoid'
import AddEmp from './components/addEmp';

const DisplayEmp = (props) =>{
    return (
        props.list.map(employee=>{
            return (
                
                    
                        <tr  key={nanoid()}>
                        
                        <td>{employee.name}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.age}</td>
                        </tr>
                        
                    
            )
        })
    )
}

const EmpList=()=>{
    const [empList, setEmpList] = useState([]);
    const [newEmployee, setNewEmployee] = useState(false);
    useEffect(()=>{
        setEmpList([]);
        fetch('http://localhost:8000', {
            method: 'GET',
        })
        .then(response=>response.json())
        .then((data)=>{
            data.map(dataitem=>{
                setEmpList((prev)=>[...prev,dataitem])
            });
        })
    },[newEmployee])

    const updatedList=()=>{
        setNewEmployee((prev)=>!prev)
    }
    return (
        <div>
            <AddEmp updatedList={updatedList}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <DisplayEmp list={empList}/>
                </tbody>
            </Table>
        </div>
        )
}


export default EmpList;