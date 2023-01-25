import React from "react"
import { fakeInterests } from "../dummy-data"

export const Interests = () => {
    console.log(fakeInterests)
  return (
    <header className="header">
      <div className="title">
        <h1>interests page</h1>
      </div>
      <div className="nav">
        <div className="nav-button">
          <p>i have interests</p>
          {/* {fakeInterests.find(id => id === 1)} */}
        </div>
      </div>
    </header>
  )
}
