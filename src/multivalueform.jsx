 import 'bootstrap/dist/css/bootstrap.min.css';
 import { useState } from "react";
//  import './color.css'
import { forwardRef } from 'react';

 function MultiValueForm() {
    
    const[formData, setFormData] = useState({  name:"" , age:"", email:"", password:""})
     const [submittedData, setSubmittedData] = useState(null);
    // const show;
     const Handelsubmmit =(event)=>{
        event.preventDefault();
        console.log(formData);
        setSubmittedData(formData);
      }
       
        const HandleChange=(event)=>{
            const{name,value}= event.target;
            setFormData((prev)=>({
                ...prev,
                [name]:value

            }))}
            // const uday = formData;
            function hidepassword (key, value){
              if(key=="password"){
                return ("password", ("....."))
              }
              return value;

            }
return (
    <>
    <div class="p-3 mb-2 bg-success-subtle text-success-emphasis" id='container'>
   <form onSubmit={Handelsubmmit}>

     <div class="form-group" id='area'>
    <label for="exampleInputEmail1">Name</label><br />
   <input type="text" value={formData.name} name="name" placeholder="Name"  onChange={HandleChange}  />
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>

  <div class="form-group" id='area'>
    <label for="exampleInputEmail1">Email address</label><br />
   <input type="email" value={formData.email} name="email" placeholder="Email" onChange={HandleChange}  />
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>

  <div class="form-group" id='area'>
    <label for="exampleInputPassword1">Password</label><br />
    <input type="password" value={formData.password} name="password" placeholder="Password"  onChange={HandleChange} />
  </div>

  <div class="form-group" id='area'>
    <label class="form-check-label" for="exampleCheck1">Age</label><br />
    <input type="age" value={formData.age} name="age" placeholder="Age"  onChange={HandleChange} />
  </div>
    <br />
  <button type="submit" class="btn btn-primary" id='area'>Submit</button>
</form>
    </div>
     {/* <h1>{uday}</h1> */}

     {submittedData && (
        <div className="p-3 mt-3 bg-dark text-white rounded">
          <h3>Submitted Object:</h3>
          {/* JSON.stringify with null and 2 formats the code nicely */}
          <pre>{JSON.stringify(submittedData, hidepassword, 6)}</pre>
        </div>
      )} 

    </>
  )

}
export default MultiValueForm 

