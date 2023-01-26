import React from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import "./Details.css"
import { Nav } from "./Nav"

export const Details = ({ details }) => {
  const { state } = useLocation()
  const detailId = state.id - 1

  if (state && details) {
    return (
      <>
        <Nav></Nav>
        <div className="details-container">
          <p className="details-title">{details[detailId].name}</p>
          <p className={`details-type ${details[detailId].type.toLowerCase()}`}>
            {details[detailId].type}
          </p>
          <p className="details-detail">{details[detailId].detail}</p>
        </div>
      </>
    )
  } else {
    return null
  }
}
