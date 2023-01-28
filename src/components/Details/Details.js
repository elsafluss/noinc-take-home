import React from "react"
import { useLocation } from "react-router-dom"

import { Nav } from "../Nav/Nav"

import "./Details.css"

export const Details = ({ details }) => {
  let currentInterest, duration
  const location = useLocation()
  const itemName = location.search.split("=").pop()
  const cleanItemName = itemName.replaceAll("%20", " ")
  const pageInfo = details.find(
    (item) => item.name.toLowerCase() === cleanItemName
  )

  if (pageInfo) {
    if (location.pathname === "/interest/") {
      currentInterest = pageInfo.current ? (
        <div>This is an active interest.</div>
      ) : (
        <div>This is not an active interest.</div>
      )
    }
    if (location.pathname === "/skill/") {
      duration = <div>Learned on {pageInfo.DateLearned}</div>
    }

    return (
      <>
        <Nav></Nav>
        <div className="details-container">
          <p className="details-title">{pageInfo.name}</p>
          <p className={`details-type ${pageInfo.type.toLowerCase()}`}>
            {pageInfo.type}
          </p>
          <div className="details-detail">{pageInfo.detail}</div>
          <div className="details-detail">{duration}</div>
          <div className="details-detail">{currentInterest}</div>
        </div>
      </>
    )
  }
}
