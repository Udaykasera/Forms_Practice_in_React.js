import { useState } from "react"
 export default function AdvanceForm(){


    const[formData, setFormData] = useState({
        country:"India",
        agree:false, gender:""

    })
     const Handelsubmmit =(event)=>{
        event.preventDefault();
        console.log(formData);
      }
       
        const HandleChange=(event)=>{
            const{name,type, value , checked}= event.target;
            setFormData((prev)=>({
                ...prev,
                [name]:type === "checkbox" ? checked :value

            }))}

return (

<>
<form onSubmit={Handelsubmmit}>
<h2> checkbox ,radio , select</h2>

<label>male
    <input type="radio" name="gender" value="Male" checked={formData.gender==="Male"} onChange={HandleChange} />
</label> 
<label>femal
     <input type="radio" name="gender" value="Female"checked={formData.gender==="Female"} onChange={HandleChange}  />
</label>
<br />


<label>Country
    <select name="country" value={formData.country}  onChange={HandleChange}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="China">China</option>
        <option value="Japan">Japan</option>
    </select>
</label>
<br />




<label>I agree with terms & Conditions
    <input type="checkbox" name="agree" checked={formData.agree}onChange={HandleChange}/>
</label>
<br />

<button type="submit"> submit</button>
</form>
</>




)

}
