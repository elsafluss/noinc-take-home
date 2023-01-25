import React from "react"
import "./Details.css"
import { Nav } from "./Nav"

export const Details = (id) => {
  return (
    <>
      <Nav></Nav>
      <p className="all">{id}</p>
      {/* <p className="all">i am a details page{id}</p> */}
    </>
  )
}
