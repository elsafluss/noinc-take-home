import React from "react"
import "./Nav.css"
import noincLogo from "../images/noinc-logo.svg"
import userIcon from "../images/username-icon.svg"

export const Nav = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-logo-container">
        <img src={noincLogo} alt="noinc logo" className="navbar-logo"></img>
      </div>
      <div className="navbar-list-container">
        <span className="navbar-divider">|</span>
        <p className="navbar-button">Home</p>
        <span className="navbar-divider">|</span>
        <p className="navbar-button">Interests</p>
        <span className="navbar-divider">|</span>
        <p className="navbar-button">Skills</p>
        <span className="navbar-divider">|</span>
        <p className="navbar-button username">
          <img
            src={userIcon}
            alt="user icon"
            className="navbar-user-icon"
          ></img>
          Username
        </p>
      </div>
    </header>
  )
}
