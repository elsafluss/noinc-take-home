import moment from "moment"

const ages = [
  { userId: 1, age: 30 },
  { userId: 2, age: 41 },
  { userId: 3, age: 69 },
]

const getUserAge = (userData) =>
  ages.find((user) => {
    if (userData.userId === ages.userId) return user.age
  })

export const userData = [
  {
    userId: 1,
    userName: "Jimbob Hank",
    interests: [
      {
        id: 1,
        name: "Soccer",
        type: "Sport",
        current: true,
        detail: "Soccer is a Sport and Sports are cool",
      },
      {
        id: 2,
        name: "Football",
        type: "Sport",
        current: true,
        detail: "Football is a Sport and Sports are physical",
      },
      {
        id: 3,
        name: "Chess",
        type: "Game",
        current: false,
        detail: "Chess is a game and games are fun",
      },
      {
        id: 4,
        name: "Racing",
        type: "Sport",
        current: false,
        detail: "Racing is a loud sport",
      },
      {
        id: 5,
        name: "Horseback Riding",
        type: "Sport",
        current: true,
        detail: "Horseback Riding is an ancient sport",
      },
    ],
    skills: [
      {
        id: 1,
        name: "Reading",
        type: "Essential",
        DateLearned: moment()
          .subtract(getUserAge(1), "years")
          .add(2, "years")
          .format(),
        detail: "Reading is essential and fun",
      },
      {
        id: 2,
        name: "Writing",
        type: "Essential",
        DateLearned: moment()
          .subtract(getUserAge(1), "years")
          .add(2, "years")
          .format(),
        detail: "Writing is essential and fun",
      },
      {
        id: 3,
        name: "Riding A Bike",
        type: "Practical",
        DateLearned: moment()
          .subtract(getUserAge(1), "years")
          .add(5, "years")
          .format(),
        detail: "Riding A Bike is not essential",
      },
      {
        id: 4,
        name: "Driving A Car",
        type: "Practical",
        DateLearned: moment()
          .subtract(getUserAge(1), "years")
          .add(16, "years")
          .format(),
        detail: "Driving A Car is essential in some countries",
      },
      {
        id: 5,
        name: "Coding",
        type: "Professional",
        DateLearned: moment()
          .subtract(getUserAge(1), "years")
          .add(24, "years")
          .format(),
        detail: "Coding is profitable",
      },
    ],
  },
  {
    userId: 2,
    userName: "CarrieLou Mary",
    interests: [
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
    ],
    skills: [
      {
        id: 1,
        name: "Knitting",
        type: "Practical",
        DateLearned: moment()
          .subtract(getUserAge(2), "years")
          .add(2, "years")
          .format(),
        detail: "Knitting is essential and fun",
      },
      {
        id: 2,
        name: "Drinking",
        type: "Essential",
        DateLearned: moment()
          .subtract(getUserAge(2), "years")
          .add(2, "years")
          .format(),
        detail: "Drinking is essential and fun",
      },
      {
        id: 3,
        name: "Walking",
        type: "Practical",
        DateLearned: moment()
          .subtract(getUserAge(2), "years")
          .add(5, "years")
          .format(),
        detail: "Walking is helpful",
      },
      {
        id: 4,
        name: "Napping",
        type: "Practical",
        DateLearned: moment()
          .subtract(getUserAge(2), "years")
          .add(16, "years")
          .format(),
        detail: "Napping is essential to well-being",
      },
      {
        id: 5,
        name: "Coding",
        type: "Professional",
        DateLearned: moment()
          .subtract(getUserAge(2), "years")
          .add(24, "years")
          .format(),
        detail: "Coding is lyfe",
      },
    ],
  },
  {
    userId: 3,
    userName: "test person",
    interests: [
      {
        id: 1,
        name: "Soccer",
        type: "Sport",
        current: true,
        detail: "Soccer is a Sport and Sports are cool",
      },
      {
        id: 2,
        name: "Football",
        type: "Sport",
        current: true,
        detail: "Football is a Sport and Sports are physical",
      },
      {
        id: 3,
        name: "Chess",
        type: "Game",
        current: false,
        detail: "Chess is a game and games are fun",
      },
      {
        id: 4,
        name: "Racing",
        type: "Sport",
        current: false,
        detail: "Racing is a loud sport",
      },
      {
        id: 5,
        name: "Horseback Riding",
        type: "Sport",
        current: true,
        detail: "Horseback Riding is an ancient sport",
      },
    ],
    skills: [
      {
        id: 1,
        name: "Reading",
        type: "Essential",
        DateLearned: moment()
          .subtract(getUserAge(1), "years")
          .add(2, "years")
          .format(),
        detail: "Reading is essential and fun",
      },
      {
        id: 2,
        name: "Writing",
        type: "Essential",
        DateLearned: moment()
          .subtract(getUserAge(1), "years")
          .add(2, "years")
          .format(),
        detail: "Writing is essential and fun",
      },
      {
        id: 3,
        name: "Riding A Bike",
        type: "Practical",
        DateLearned: moment()
          .subtract(getUserAge(1), "years")
          .add(5, "years")
          .format(),
        detail: "Riding A Bike is not essential",
      },
      {
        id: 4,
        name: "Driving A Car",
        type: "Practical",
        DateLearned: moment()
          .subtract(getUserAge(1), "years")
          .add(16, "years")
          .format(),
        detail: "Driving A Car is essential in some countries",
      },
      {
        id: 5,
        name: "Coding",
        type: "Professional",
        DateLearned: moment()
          .subtract(getUserAge(1), "years")
          .add(24, "years")
          .format(),
        detail: "Coding is profitable",
      },
    ],
  },
]
