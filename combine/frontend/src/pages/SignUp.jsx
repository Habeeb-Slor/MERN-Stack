import React, { useState } from 'react'
import axios from "axios";

const SignUp = () => {
  const [firstname, setfirstname] = useState("")

  let url = ""
  const signup =()=>{
    axios.post(url,{firstname})
    .then((response)=>{
      console.log(response)
    })
  }
  return (
    <>
      <h1>Signup Page</h1>

      <input type="text" placeholder='Firstname' onChange={(e)=>setfirstname(e.target.value)}/>
      <button onClick={signup}>Sign Up</button>


    </>
  )
}

export default SignUp