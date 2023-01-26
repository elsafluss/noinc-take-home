import React from "react"
import PropTypes from "prop-types"
import "./Home.css"
import { Nav } from "./Nav.js"
import { Card } from "./Card"

export const Home = ({ userData }) => {
  const username = userData.userData.userData.userName
  const interests = userData.userData.userData.interests
  const skills = userData.userData.userData.skills
  const description = userData.userData.userData.description
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
