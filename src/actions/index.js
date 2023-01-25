export const setUserData = (userData) => {
    console.log(userData)
    return {
        type: "user/setUserData",
        userData
    }
}

// export const showInterests = (interests) => {
//   return {
//     type: "SHOW_INTERESTS",
//     interests
//   }
// }

// export const showSkills = (skills) => {
//     return {
//         type: "SHOW_SKILLS",
//         skills
//     }
// }