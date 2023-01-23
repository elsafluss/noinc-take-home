import React from "react"
import "./App.css"
import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { Switch } from "react-router-dom"
import { fakeInterests, fakeSkills } from "./dummy-data"
import { Nav } from "./components/Nav.js"
import { Login } from "./components/Login"
import { Interests } from "./components/Interests"

function App() {
  console.log("test return", fakeInterests)
  console.log("test return", fakeSkills)
  return (
    <div className="App">
      <Route exact path="/" render={() => <Login />} />
      <Switch>
      {/* nav should not show on login page */}
        {/* <Nav></Nav>  */}
        <Route
          exact
          path="/interests"
          render={() => <Interests interests={fakeInterests} />}
        />
      </Switch>
    </div>
  )
}

export default App
