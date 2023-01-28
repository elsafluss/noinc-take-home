import React from "react"
import PropTypes from "prop-types"
import "./Home.css"
import { Nav } from "../Nav/Nav.js"
import { Card } from "../Card/Card"

export const Home = ({ userData }) => {
  const username = userData.user.userData.userName
  const interests = userData.user.userData.interests
  const skills = userData.user.userData.skills
  const description = userData.user.userData.description
  if (username && interests && skills && description) {
    return (
      <>
        <Nav></Nav>
        <div className="home-container">
          <div className="home-header-title">
            <p>Welcome, {username}</p>
          </div>
          <div className="home-header-text">{description}</div>
        </div>
        <div className="home-content">
          <Card interests={interests}></Card>
          <Card skills={skills}></Card>
        </div>
      </>
    )
  } else {
    return null
  }
}

Home.propTypes = {
  userData: PropTypes.object,
}
