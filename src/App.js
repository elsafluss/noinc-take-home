import React from "react"
import "./App.css"
import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { Switch } from "react-router-dom"
import { fakeInterests, fakeSkills } from "./dummy-data"
import { Login } from "./components/Login"
import { Nav } from "./components/Nav"
import { Home } from "./components/Home"

function App() {
  console.log("test return", fakeInterests)
  console.log("test return", fakeSkills)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/home" render={() => <Home interests={fakeInterests} />} />
        <Route path="/*" component={Nav} />
      </Switch>
    </div>
  )
}

export default App
