import React from "react"
import "./Card.css"

export const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="card-title">
          <p>Card title</p>
        </div>
        <div className="card-details">
          <div className="card-name-key">NAME:</div>
          <div className="card-name-value">card details name</div>
          <div className="card-type-key">TYPE:</div>
          <div className="card-type-value">card details type</div>
        </div>
      </div>
    </>
  )
}
