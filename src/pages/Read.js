import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';



const Read = () => {

    const [Data,setData]=useState([])

    const Navigate=useNavigate()

    const Getdata =() => {
        axios.get("http://localhost:8000/get")
        .then((res)=> {
            console.log(res);
            setData(res.data)
        });
    }


    const Delete = (id) => {
        axios.delete(`http://localhost:8000/del/${id}`)
        .then(()=> {
            Getdata()
        })
    }


    const Update = (id,name,email,number,gender) => {

        localStorage.setItem("Id",id)
        localStorage.setItem("Name",name)
        localStorage.setItem("Email",email)
        localStorage.setItem("Number",number)
        localStorage.setItem("Gender",gender)

        Navigate("/update")


    }

    useEffect(()=> {
        Getdata();
    },[]);

  

    return (

            <div className="container table-responsive">
              <Table className="table table-sm table-bordered table-hover text-center">
                <thead className='table-dark'>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Mobile Number</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='table-secondary'>
                   { Data.map((s)=> (<tr>
                        <td>{s._id}</td>
                        <td>{s.Name}</td>
                        <td>{s.Email}</td>
                        <td>{s.Number}</td>
                        <td>{s.Gender}</td>
                        <td> <Button className='Button' variant='outline-warning' onClick={()=> Update(s._id,s.Name,s.Email,s.Number,s.Gender)}>Edit</Button> <Button className='Button' variant='outline-warning'  onClick={()=>Delete(s._id)}>Delete</Button> </td>
                    </tr> ))}
                </tbody>
              </Table>
            </div>
           
          
  

    );
};

export default Read;