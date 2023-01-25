const initialUserState = {
  userData: {},
}

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case "user/setUserData":
      return { ...state, userData: action.payload }
    default:
      return state
  }
}

export default user
