const initialUserState = {
  userData: {},
}

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case "setUserData":
      return { ...state, userData: action.userData }
    default:
      return state
  }
}

export default user
