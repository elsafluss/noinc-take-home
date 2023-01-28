import React from "react"
import { Link } from "react-router-dom"

import "./Card.css"
// TODO: this is displaying the cards on top of each other

export const Card = ({cardData, type}) => {
  if (!cardData) {
    return <h1> You are not interesting or skilled, please get a hobby. </h1>
  } else {
    return cardData.map((item, i) => {
      return (
        <Link
          className="link"
          key={i}
          to={{
            pathname: `/${type.toLowerCase()}/?item=${item.name.toLowerCase()}`,
            state: item.id,
          }}
        >
          <div className={`card-container ${item.current}`}>
            <div className="card-title">
              <p>{type}</p>
            </div>
            <div className="card-details">
              <div className="card-name-key">NAME:</div>
              <div className="card-name-value">{item.name}</div>
              <div className="card-type-key">TYPE:</div>
              <div className={`card-type-value ${item.type.toLowerCase()}`}>
                {item.type}
              </div>
            </div>
          </div>
        </Link>
      )
    })
  }
}
