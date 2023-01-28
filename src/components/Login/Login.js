import React, { useState } from "react"
import { Link } from "react-router-dom"
import { setUserData } from "../../Utils/Redux/actions"
import { useDispatch } from "react-redux"

import noincLogo from "../../images/noinc-logo.svg"

import { getData, getLogins } from "../../Utils/apiCalls"

import "./Login.css"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const authUser = async () => {
    // The most basic of form validation
    // TODO: add error message instead of just returning here
    if (!email.includes("@") || password.length < 3) return

    const loginInfo = await getLogins()

    // Could become slow once there are many users, but it's fake auth anyway
    if (loginInfo) {
      loginInfo.find((userLoginData) => {
        if (
          email === userLoginData.email &&
          password === userLoginData.password
        ) {
          getData(userLoginData.userId).then((response) => {
            setUserData(response)
            dispatch(setUserData(response))
          })
        }
      })
    }
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
