import { setUserData } from "./actions"
import { loginInfo } from "./authentication"
import { userData } from "./dummy-data"

// TODO: get currentUser from store, return that user's data file
export const getData = (userId) => {
  const url = `http://localhost:3000/`
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }

  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`)
    } else {
      const currentUserData = userData.find((user) => userId === user.userId)
      //save what's returned here into redux
      setUserData(currentUserData)
      // return userData.find(user => userId === user.userId)
    }
  })
}

export const getLogins = () => {
  const url = `http://localhost:3000/`
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }

  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`)
    } else {
      // console.log("elsa apicall userData", userData)
      return loginInfo
    }
  })
}
