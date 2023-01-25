const initialUserState = {
  userName: "",
  password: "",
  email: "",
  interests: [],
  skills: [],
}

const user = (state = initialUserState, action) => {
  switch (action.type) {
    // case setUser:
    //   return { ...state, userName: action.payload }
    // case showInterests:
    //   return { ...state, interests: action.payload }
    // case showSkills:
    //   return { ...state, skills: action.payload }
    default:
      return state
  }
}

export default user
