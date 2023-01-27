import React from "react"
import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { Switch } from "react-router-dom"
import "./App.css"
import { Login } from "./components/Login"
import { useSelector } from "react-redux"
import { setUserData } from "./actions"
import { Nav } from "./components/Nav"
import { Home } from "./components/Home"
import { Details } from "./components/Details"
import { Catalog } from "./components/Catalog"

export const App = () => {
  const userData = useSelector(setUserData)
  const userInterests = userData.userData.userData.interests
  const userSkills = userData.userData.userData.skills

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
