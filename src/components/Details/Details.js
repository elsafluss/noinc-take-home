import React from "react"
import { useLocation } from "react-router-dom"

import { Nav } from "../Nav/Nav"

import "./Details.css"
// details is the current user's interests/skills

export const Details = ({ details }) => {
  const { state } = useLocation()
  console.log(details)
  const detailId = state.id - 1
  const pageInfo = details[detailId]

  if (state && details) {
    return (
      <>
        <Nav></Nav>
        <div className="details-container">
          <p className="details-title">{pageInfo.name}</p>
          <p className={`details-type ${pageInfo.type.toLowerCase()}`}>
            {pageInfo.type}
          </p>
          <p className="details-detail">{pageInfo.detail}</p>
          <p className="details-current">{pageInfo.current}</p>
        </div>
      </>
    )
  } else {
    return null
  }
}
