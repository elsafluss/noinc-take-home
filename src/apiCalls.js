import { loginInfo } from "./mockData/authentication"
import { userData } from "./mockData/dummy-data"

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
      return userData.find((user) => userId === user.userId)
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
      return loginInfo
    }
  })
}

export const getInfo = (type, userId) => {
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
      const userInfo = userData.find((user) => userId === user.userId)
      // don't return here - put it into redux
      return userInfo[type]
    }
  })
}
