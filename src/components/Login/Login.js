import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setUserData } from "../../Utils/Redux/actions"
import { useDispatch } from "react-redux"

import noincLogo from "../../images/noinc-logo.svg"

import { getData, getLogins } from "../../Utils/apiCalls"

import "./Login.css"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let validated = false

  async function authUser(event) {
    event.preventDefault()
    if (!email.includes("@") || password.length < 3) {
      window.alert(
        "Alerts are pretty terrible.\nThis should be a modal or just text on the page.\nFor now, though I'll just tell you that the username must include '@', and password must be longer than three characters. This is very secure."
      )
    } else {
      validated = true
    }

    const loginInfo = await getLogins()

    // Could become slow once there are many users, but it's fake auth anyway
    if (loginInfo && validated) {
      const userInfo = loginInfo.find((userLoginData) => {
        if (
          email === userLoginData.email &&
          password === userLoginData.password
        ) {
          return true
        }
        return false
      })
      if (!userInfo) {
        window.alert(
          "You've entered information that doesn't match our records.\nTo reset your password, wait until I've built that functionality."
        )
      }
      await getData(userInfo.userId).then((response) => {
        dispatch(setUserData(response))
      })
      navigate("/home")
    }
  }

  return (
    <header className="login-container">
      <div className="login-logo-container">
        <img src={noincLogo} alt="noinc logo" className="login-logo" />
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
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="login-button" onClick={authUser}>
            LOGIN
          </button>
        </form>
      </div>
    </header>
  )
}
