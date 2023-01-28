import React from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import { Card } from "../Card/Cards"
import { Nav } from "../Nav/Nav"

import "./Catalog.css"

export const Catalog = (content) => {
  const userData = useSelector((state) => state.user.userData)
  const pageType = useLocation()
  const cleanPageType = pageType.pathname.toUpperCase().replace("/", "")

  if (!userData) {
    return <h1>There's nothing to see here</h1>
  } else if (pageType.pathname === "/interests") {
    return (
      <>
        <Nav></Nav>
        <p className="catalog-title">{cleanPageType}</p>
        <div className="catalog-container">
          <Card cardData={userData.interests} type={"Interest"}></Card>
        </div>
      </>
    )
  } else if (pageType.pathname === "/skills") {
    return (
      <>
        <Nav></Nav>
        <p className="catalog-title">{cleanPageType}</p>
        <div className="catalog-container">
          <Card cardData={userData.skills} type={"Skill"}></Card>
        </div>
      </>
    )
  } else {
    return null
  }
}
