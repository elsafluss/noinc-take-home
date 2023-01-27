import React from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { setUserData } from "../actions"
import { Card } from "./Card"
import "./Catalog.css"
import { Nav } from "./Nav"

export const Catalog = () => {
  const { state } = useLocation()
  const pageType = `${state.content
    .charAt(0)
    .toUpperCase()}${state.content.slice(1)}`
  const { userData } = useSelector(setUserData)
  const catalogData = userData.userData[state.content]

  if (!catalogData) {
    return <h1>There's nothing to see here</h1>
  } else if (pageType === "Interests") {
    return (
      <div className="details-container">
        <p className="details-title">{pageType}</p>
        <Nav></Nav>
        <Card interests={catalogData}></Card>
      </div>
    )
  } else if (pageType === "Skills") {
    return (
      <div className="details-container">
        <p className="details-title">{pageType}</p>
        <Nav></Nav>
        <Card skills={catalogData}></Card>
      </div>
    )
  } else {
    return null
  }
}
