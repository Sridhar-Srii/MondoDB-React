import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Update = () => {

    const [id,SetId]=useState(0)
    const [Names,SetName]=useState("");
    const [Emails,SetEmail]=useState("");
    const [Numbers,SetNumber]=useState("");
    const [Genders,SetGender]=useState("");

    const Navigate=useNavigate()


    const UpdateUser = () => {
        axios.put(`http://localhost:8000/update/${id}`,
        {
            Name:Names,
            Email:Emails,
            Number:Numbers,
            Gender:Genders
        } )
        SetName("")
        SetEmail("")
        SetNumber("")
        Navigate("/read")
    }


    useEffect (() => {
        SetId(localStorage.getItem("Id"))
        SetName(localStorage.getItem("Name"))
        SetEmail(localStorage.getItem("Email"))
        SetNumber(localStorage.getItem("Number"))
        SetGender(localStorage.getItem("Gender"))
    },[])


    return (
        <div>
        <h2 className='form'>Update Form</h2> <br></br>
          
        <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label> <br></br> <br></br>
          <input type="text" className="form-control" id="exampleInputName" onChange={(e) => SetName(e.target.value)} value={Names} /> 
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> <br></br> <br></br>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => SetEmail(e.target.value)} value={Emails} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label> <br></br> <br></br>
          <input type="number" className="form-control" id="exampleInputPassword1" onChange={(e) => SetNumber(e.target.value)} value={Numbers} /> 
        </div> 
       <br></br> 
        <div className="form-check">
          <input type="radio" className="form-check-input" id="male" name="Gender" defaultValue="option1" onChange={(e) => SetGender(e.target.value)} value={"Male"} />Male
          <label className="form-check-label "  />
        </div> 
      
        <div className="form-check">
          <input type="radio" className="form-check-input" id="female" name="Gender" defaultValue="option2" onChange={(e) => SetGender(e.target.value)} value={"Female"} />Female
          <label className="form-check-label"  />
        </div>
         <br></br>
         <br></br>
        
        <div>
        <input type="submit" className='btn' onClick={UpdateUser}></input>
        </div>
        </form>
        
        </div>

    )

}

export default Update;