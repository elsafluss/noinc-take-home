import React from "react"
// import { connect } from "react-redux"
import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { Switch } from "react-router-dom"
import "./App.css"
import { Login } from "./components/Login"
import { Nav } from "./components/Nav"
import { Home } from "./components/Home"
import { useSelector } from "react-redux"
import { setUserData } from "./actions"
import { Details } from "./components/Details"

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
        <Route path="/skill/*" render={() => <Details details={userSkills} />} />
        <Route path="/*" component={Nav} />
      </Switch>
    </div>
  )
}
