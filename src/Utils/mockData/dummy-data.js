import moment from "moment"

const ages = [
  { userId: 1, age: 30 },
  { userId: 2, age: 41 },
  { userId: 3, age: 69 },
]

const getUserAge = (userData) =>
  ages.find(() => {
    const age = userData.userId === ages.userId
    return age
  })

export const userData = [
  {
    userId: 1,
    userName: "Jimbob Hank",
    description:
      "Hey, Luke! May the Force be with you. Oh God, my uncle. How am I ever gonna explain this? Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. You're all clear, kid. Let's blow this thing and go home! As you wish. You don't believe in the Force, do you? I find your lack of faith disturbing. She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There'll be no one to stop us this time! Escape is not his plan. I must face him, alone. Escape is not his plan. I must face him, alone. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. In my experience, there is no such thing as luck. I don't know what you're talking about. I am a member of the Imperial Senate on a diplomatic mission to Alderaan-- But with the blast shield down, I can't even see! How am I supposed to fight?",
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
    description:
      "On second thoughts, let's not go there. It is a silly place. Did you dress her up like this? Well, I didn't vote for you. Why do you think that she is a witch? We want a shrubbery!! He hasn't got shit all over him. Who's that then? Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! Look, my liege! She looks like one. The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king. We shall say 'Ni' again to you, if you do not appease us. I'm not a witch. How do you know she is a witch? …Are you suggesting that coconuts migrate? …Are you suggesting that coconuts migrate? Burn her! Bring her forward! Be quiet! He hasn't got shit all over him. But you are dressed as one… What a strange person. He hasn't got shit all over him. On second thoughts, let's not go there. It is a silly place. What do you mean? Well, I got better. A newt? I'm not a witch.",
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
    description:
      "The way I see it, every life is a pile of good things and bad things.…hey.…the good things don't always soften the bad things; but vice-versa the bad things don't necessarily spoil the good things and make them unimportant. It's art! A statement on modern society, 'Oh Ain't Modern Society Awful?'! No, I'll fix it. I'm good at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call me the Rotmeister. You hate me; you want to kill me! Well, go on! Kill me! KILL ME! Stop talking, brain thinking. Hush. No, I'll fix it. I'm good at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call me the Rotmeister. You've swallowed a planet! Saving the world with meals on wheels. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself. Sorry, checking all the water in this area; there's an escaped fish. Did I mention we have comfy chairs? The way I see it, every life is a pile of good things and bad things.…hey.…the good things don't always soften the bad things; but vice-versa the bad things don't necessarily spoil the good things and make them unimportant. Heh-haa! Super squeaky bum time! I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship. Sorry, checking all the water in this area; there's an escaped fish.",
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
