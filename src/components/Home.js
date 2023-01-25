import React from "react"
import PropTypes from "prop-types"
import "./Home.css"
import { Nav } from "./Nav.js"
import { Card } from "./Card"

export const Home = ({ userData }) => {
  const username = userData.userData.userData.userName
  const interests = userData.userData.userData.interests
  if (username && interests) {
    console.log(interests)
    console.log(username)
    return (
      <>
        <Nav></Nav>
        <div className="home-container">
          <div className="home-header-title">
            <p>Welcome, {username}</p>
          </div>
          <div className="home-header-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar sic
            tempor. Sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc
            accuan eget.
          </div>
        </div>
        <div className="home-content">
          <Card interests={interests}></Card>
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
