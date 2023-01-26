import React from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import "./Catalog.css"
import { Nav } from "./Nav"

export const Catalog = ({ details }) => {
  const { state } = useLocation()
  const pageType = state.content

  if (state) {
    return (
      <>
        <Nav></Nav>
        <div className="details-container">
          <p className="details-title">{pageType}</p>
          {/* <p className={`details-type ${details[detailId].type.toLowerCase()}`}>
            {details[detailId].type}
          </p>
          <p className="details-detail">{details[detailId].detail}</p> */}
        </div>
      </>
    )
  } else {
    return null
  }
}
