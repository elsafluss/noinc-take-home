import React from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import "./Details.css"
import { Nav } from "../Nav/Nav"

export const Details = ({ details }) => {
  const { state } = useLocation()
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
        </div>
      </>
    )
  } else {
    return null
  }
}
