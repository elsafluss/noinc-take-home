import React from "react"
import "./Card.css"

export const Card = ({ interests }) => {
  if (!interests) {
    return <h1> you are not interesting, please get a hobby </h1>
  } else {
    const interestCard = interests.map((interest, i) => {
      return (
        <div className="card-container" key={i}>
          <div className="card-title">
            <p>Interest</p>
          </div>
          <div className="card-details">
            <div className="card-name-key">NAME:</div>
            <div className="card-name-value">{interest.name}</div>
            <div className="card-type-key">TYPE:</div>
            <div className="card-type-value">{interest.type}</div>
          </div>
        </div>
      )
    })
    return <div>{interestCard}</div>
  }
}
