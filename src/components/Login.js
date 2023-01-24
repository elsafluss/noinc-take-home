import React from "react"
import { Link } from "react-router-dom"
import "./Login.css"
import noincLogo from "../images/noinc-logo.svg"
// TODO: CHANGE THE LOGIN FORM TO A STANDALONE COMPONENT

export const Login = () => {
  return (
    <header className="login-container">
      <div className="login-logo-container">
        <img src={noincLogo} alt="noinc logo" className="login-logo"></img>
      </div>
      <div className="login-form-container">
        <p className="login-text">Login to Our Magic Portal</p>
        <form className="login-form">
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <Link to="/home">
            <button className="login-button">LOGIN</button>
          </Link>
        </form>
      </div>
    </header>
  )
}
