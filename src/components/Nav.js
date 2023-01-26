import React from "react"
import "./Nav.css"
import noincLogo from "../images/noinc-logo.svg"
import userIcon from "../images/username-icon.svg"
import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-logo-container">
        <img src={noincLogo} alt="noinc logo" className="navbar-logo"></img>
      </div>
      <div className="navbar-list-container">
        <span className="navbar-divider">|</span>
        <NavLink
          to={{
            pathname: `/home`,
          }}
          className="navbar-button"
        >
          Home
        </NavLink>
        <span className="navbar-divider">|</span>
        <NavLink
          to={{
            pathname: `/interests`,
            state: { content: 'interests' },
          }}
          className="navbar-button"
        >
          Interests
        </NavLink>
        <span className="navbar-divider">|</span>
        <NavLink
          to={{
            pathname: `/skills`,
            state: { content: 'skills'}
          }}
          className="navbar-button"
        >
          Skills
        </NavLink>
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
