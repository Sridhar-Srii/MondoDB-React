import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Form = () => {

    const [Names,SetName]=useState("");
    const [Emails,SetEmail]=useState("");
    const [Numbers,SetNumber]=useState("");
    const [Genders,SetGender]=useState("");
    

    function name1(e) {
      SetName(e.target.value)
      // console.log(e.target.value);
    }

    function email1(e) {
      SetEmail(e.target.value)
    }
    
    function number1(e) {
      SetNumber(e.target.value)
    }

    function gender1(e) {
      SetGender(e.target.value)
    }


    const Navigate=useNavigate()

      const data = {
          Name:Names,
          Email:Emails,
          Number:Numbers,
          Gender:Genders
        }
    const Handler = (e) => {

      e.preventDefault();
          
      axios.post("http://localhost:8000/post",data
      // {
      //   Name:Names,
      //   Email:Emails,
      //   Number:Numbers,
      //   Gender:Genders
      // } 
      )
      .then((res) => {
        console.log(res.data);
      })

      SetName("")
      SetEmail("")
      SetNumber("")
      Navigate("/read")
      
     
      



    }



    return (

        <div>
        <h2 className='form'>Registration Form</h2> <br></br>
          
        <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label> <br></br> <br></br>
          <input type="text" className="form-control" id="exampleInputName" onChange={name1} value={Names} /> 
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> <br></br> <br></br>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={email1} value={Emails} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label> <br></br> <br></br>
          <input type="number" className="form-control" id="exampleInputPassword1" onChange={number1} value={Numbers} /> 
        </div> 
       <br></br> 
        <div className="form-check">
          <input type="radio" className="form-check-input" id="male" name="Gender" defaultValue="option1" onChange={gender1} value={"Male"} />Male
          <label className="form-check-label "  />
        </div> 
      
        <div className="form-check">
          <input type="radio" className="form-check-input" id="female" name="Gender" defaultValue="option2" onChange={gender1} value={"Female"} />Female
          <label className="form-check-label"  />
        </div>
         <br></br>
         <br></br>
        
        <div>
        <input type="submit" className='btn' onClick={Handler}></input>
        </div>
        </form>
        
        </div>
    );
};

export default Form;