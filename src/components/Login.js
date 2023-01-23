import React from "react"
import "./Login.css"
import noincLogo from '../images/noinc-logo.svg'
// TODO: CHANGE THE LOGIN FORM TO A STANDALONE COMPONENT

export const Login = () => {
  return (
    <header className="login-container">
      <div className="logo-container">
        <img src={noincLogo} alt="noinc logo" className="noinc-logo"></img>
      </div>
      <div className="login-form-container">
        <p className="login-text">Login to Our Magic Portal</p>
        <form className="login-form">
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <button className="login-button">LOGIN</button>
        </form>
      </div>
    </header>
  )
}
