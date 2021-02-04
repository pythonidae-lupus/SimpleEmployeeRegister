import React from 'react';
import {useForm} from 'react-hook-form';

const AddEmp = (props) =>{
    const { register, handleSubmit, watch, errors } = useForm();
    const addEmployee=(data, e)=>{
        e.target.reset();
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
				'Content-Type': 'application/json',
			  },
			body: JSON.stringify(data)
        })
        .then(response=>response.json())
        props.updatedList()
    }
    return (
       
    <form onSubmit={handleSubmit(addEmployee)}>
   
      <input name="empName" ref={register({required:true})} />
      
      <input name="empSalary" ref={register({ required: true })} />

      <input name="empAge" ref={register({ required: true })} />
      
      <input type="submit" />
    </form>
    )
}

export default AddEmp;