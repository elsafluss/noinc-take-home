import React from "react"
import { fakeInterests } from "../dummy-data"
import { Nav } from "./Nav.js"
import "./Home.css"
import { Card } from "./Card"

export const Home = () => {
  console.log("elsa home page", fakeInterests)
  return (
    <>
      <Nav></Nav>
      <div className="home-container">
        <div className="home-header-title">
          <p>Welcome Username</p>
        </div>
        <div className="home-header-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis orci, sed rhoncus pronin sapien nunc accuan eget.
        </div>
      </div>
      <div className="home-content">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      {/* {fakeInterests.find(id => id === 1)} */}
    </>
  )
}