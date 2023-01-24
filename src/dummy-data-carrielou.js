import moment from "moment"

const Age = 40
const Name = "CarrieLou Mary"
const Password = "password1"
export const fakeInterests = [
  {
    id: 1,
    name: "Handball",
    type: "Sport",
    current: true,
    detail: "Handball is a sport and sports are cool",
  },
  {
    id: 2,
    name: "Pickleball",
    type: "Sport",
    current: true,
    detail: "Pickleball is a sport and sports are physical",
  },
  {
    id: 3,
    name: "Stardew Valley",
    type: "Game",
    current: false,
    detail: "Stardew Valley is a game and games are fun",
  },
  {
    id: 4,
    name: "World of Warcraft",
    type: "Game",
    current: true,
    detail: "WoW is the perfect game",
  },
  {
    id: 5,
    name: "Swimming",
    type: "Sport",
    current: true,
    detail: "Swimming is an ancient sport",
  },
]

export const fakeSkills = [
  {
    id: 1,
    name: "Knitting",
    type: "Practical",
    DateLearned: moment().subtract(Age, "years").add(2, "years").format(),
    detail: "Knitting is essential and fun",
  },
  {
    id: 2,
    name: "Drinking",
    type: "Essential",
    DateLearned: moment().subtract(Age, "years").add(2, "years").format(),
    detail: "Drinking is essential and fun",
  },
  {
    id: 3,
    name: "Walking",
    type: "Practical",
    DateLearned: moment().subtract(Age, "years").add(5, "years").format(),
    detail: "Walking is helpful",
  },
  {
    id: 4,
    name: "Napping",
    type: "Practical",
    DateLearned: moment().subtract(Age, "years").add(16, "years").format(),
    detail: "Napping is essential to well-being",
  },
  {
    id: 5,
    name: "Coding",
    type: "Professional",
    DateLearned: moment().subtract(Age, "years").add(24, "years").format(),
    detail: "Coding is lyfe",
  },
]
