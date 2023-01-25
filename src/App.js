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

export const App = () => {
  const userData = useSelector(setUserData)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/home" render={() => <Home userData={userData} />} />
        {/* <Route path="/details" render={() => <Details id={id}/>} /> */}
        <Route path="/*" component={Nav} />
      </Switch>
    </div>
  )
}
