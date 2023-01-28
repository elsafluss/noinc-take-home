import React from "react"
import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { Switch } from "react-router-dom"

import { setUserData } from "./Utils/Redux/actions"
import { useSelector } from "react-redux"

import { Login } from "./components/Login/Login"
import { Nav } from "./components/Nav/Nav"
import { Home } from "./components/Home/Home"
import { Details } from "./components/Details/Details"
import { Catalog } from "./components/Catalog/Catalog"

import "./App.css"
import { loginInfo } from "./Utils/authentication"

export const App = () => {
  const { userData } = useSelector(setUserData)
  const userInterests = userData.user.userData.interests
  const userSkills = userData.user.userData.skills

  // Just wanted to make logging in a little easier :)
  console.log('l33t haxxors only - do not include the quotation marks',loginInfo)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/home" render={() => <Home userData={userData} />} />
        <Route
          path="/interest/*"
          render={() => <Details details={userInterests} />}
        />
        <Route
          path="/skill/*"
          render={() => <Details details={userSkills} />}
        />
        <Route path="/skills" render={() => <Catalog userData={userData} />} />
        <Route path="/interests" render={() => <Catalog />} />
        <Route path="/*" component={Nav} />
      </Switch>
    </div>
  )
}
