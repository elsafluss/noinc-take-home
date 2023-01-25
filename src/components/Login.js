import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.css"
import noincLogo from "../images/noinc-logo.svg"
import { getData } from "../apiCalls"
import { loginInfo } from "../authentication"

// TODO: CHANGE THE LOGIN FORM TO A STANDALONE COMPONENT
export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [logins, setLogins] = useState("")

  // when the page mounts, get the list of username/passwords
  // eventually use this, for now just import the un/pw list from authentication.js
  // useEffect(() => setLogins(getLogins()), [])

  // Could become slow once there are many users, but it's fake auth anyway
  const authUser = () => {
    loginInfo.find((userLoginData) => {
      if (
        email === userLoginData.email &&
        password === userLoginData.password
      ) {
        getData(userLoginData.userId)
      }
    })
  }

  return (
    <header className="login-container">
      <div className="login-logo-container">
        <img src={noincLogo} alt="noinc logo" className="login-logo"></img>
      </div>
      <div className="login-form-container">
        <p className="login-text">Login to Our Magic Portal</p>
        <form className="login-form">
          <input
            placeholder="Username"
            name="username"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <input
            placeholder="Password"
            name="password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <Link to="/home">
            <button type="submit" className="login-button" onClick={authUser}>
              LOGIN
            </button>
          </Link>
        </form>
      </div>
    </header>
  )
}
