import React, { useState } from 'react'
import './RegistartionForm.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const RegistrationForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [allEntry, setAllEntry] = useState([])

  const [action, setAction] = useState("Login")
  const submitForm =(e) =>{
    e.preventDefault();

    const newEntry = {name: name, email: email, password: password};
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);

    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
    <form action="" onSubmit={submitForm}>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">

          {action === "Login" ? <div></div> : <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' name="name" value={name} onChange= {(e) =>setName(e.target.value)} />
          </div>}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id' name="email" value={email} onChange= {(e) =>setEmail(e.target.value)} />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Enter Password' name="password" value={password} onChange= {(e) =>setPassword(e.target.value)} />
          </div>

        </div>
        {action==="Sign Up"? <div></div> :  <div className="forgot-password">Lost Password? <span>click here</span></div> }
       
        <div className="submit-container">
          <button type="submit" className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }} >Sign Up</button>
          <button type="submit" className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }} >Login</button>
        </div>
      </div>
      </form>
    </>
  )
}

export default RegistrationForm
