import React from "react"
import { useLocation } from "react-router-dom"

import { Nav } from "../Nav/Nav"

import "./Details.css"
// details is the current user's interests/skills

export const Details = ({ details }) => {
  const location = useLocation()
  const itemName = location.search.split("=")[1]
  const pageInfo = details.find((item) => item.name.toLowerCase() === itemName)
  
  if (pageInfo) {
    const current = pageInfo.current === true ? <p>Active</p> : <p>Inactive</p>
    return (
      <>
        <Nav></Nav>
        <div className="details-container">
          <p className="details-title">{pageInfo.name}</p>
          <p className={`details-type ${pageInfo.type.toLowerCase()}`}>
            {pageInfo.type}
          </p>
          <p className="details-detail">{pageInfo.detail}</p>
          <p className="details-current">{current}</p>
        </div>
      </>
    )
  } else {
    return null
  }
}
