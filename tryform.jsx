import { useState } from "react"
export default function Form(){
    
       const [inputs, setInputs] = useState({});

       const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
       }

       const handleSubmit = (event) => {
        event.preventDefault();
        const {email, name} = inputs;
        console.log(inputs)
        alert(inputs.email)
       }
       return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={inputs.username || ""}  placeholder="Enter Name" onChange={handleChange}/>
            <input type="email" name="email" value={inputs.email || " "} placeholder="Enter Email"  onChange={handleChange}/>
            <input type="submit" />
        </form>
        </>
    )
}