import React from "react"
import { Link } from "react-router-dom"
import "./Card.css"

export const Card = ({ interests, skills }) => {
  if (!interests && !skills) {
    return <h1> You are not interesting or skilled, please get a hobby </h1>
  } else if (interests) {
    const interestCard = interests.map((interest, i) => {
      return (
        <Link
          className="link"
          key={i}
          to={{
            pathname: `/interest/${interest.name.toLowerCase()}`,
            state: { id: interest.id }
            // send through its id maybe?
          }}
        >
          <div className="card-container">
            <div className="card-title">
              <p>Interest</p>
            </div>
            <div className="card-details">
              <div className="card-name-key">NAME:</div>
              <div className="card-name-value">{interest.name}</div>
              <div className="card-type-key">TYPE:</div>
              <div className={`card-type-value ${interest.type.toLowerCase()}`}>
                {interest.type}
              </div>
            </div>
          </div>
        </Link>
      )
    })
    return <div>{interestCard}</div>
  } else if (skills) {
    const skillsCard = skills.map((skill, i) => {
      return (
        <Link
          className="link"
          key={i}
          to={{
            pathname: `/skill/${skill.name.toLowerCase()}`,
            state: { id: skill.id },
          }}
        >
          <div className="card-container">
            <div className="card-title">
              <p>Skill</p>
            </div>
            <div className="card-details">
              <div className="card-name-key">NAME:</div>
              <div className="card-name-value">{skill.name}</div>
              <div className="card-type-key">TYPE:</div>
              <div className={`card-type-value ${skill.type.toLowerCase()}`}>
                {skill.type}
              </div>
            </div>
          </div>
        </Link>
      )
    })
    return <div>{skillsCard}</div>
  }
}
