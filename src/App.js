import React from "react"
// import { connect } from "react-redux"
import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { Switch } from "react-router-dom"
import "./App.css"
import { Login } from "./components/Login"
import { Nav } from "./components/Nav"
import { Home } from "./components/Home"
// import { setUser, showInterests, showSkills } from "./actions"
// import { Details } from "./components/Details"

export const App = () => {
  // TODO: get the userId from the store for the logged in person
  // then get the user data from the store and pass that through the Home component
  // const userData = getData(1)
  // setUser(userData)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/home" render={() => <Home userData={'userData'} />} />
        {/* <Route path="/details" render={() => <Details id={id}/>} /> */}
        <Route path="/*" component={Nav} />
      </Switch>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   interests: state.interests,
//   skills: state.skills,
// })

// export default connect(mapStateToProps, { showInterests, showSkills })(App)
