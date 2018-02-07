let users = {
  sarah_edo: {
    id: 'sarah_edo',
    name: 'Sarah Drasner',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'a',
      "6ni6ok3ym7mf1p33lnez": 'a',
      "am8ehyc8byjqgar0jgpub9": 'b',
      "loxhs1bqm25b708cmbf3g": 'd'
    },
    polls: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/tyler.jpg',
    answers: {
      "vthrdm985a262al8qx3do": 'a',
      "xj352vofupe1dqz9emx13r": 'a',
    },
    polls: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  dan_abramov: {
    id: 'dan_abramov',
    name: 'Dan Abramov',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/dan.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'a',
      "vthrdm985a262al8qx3do": 'd',
      "6ni6ok3ym7mf1p33lnez": 'd'
    },
    polls: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let polls = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    question: "Who is the best basketball player to ever live?",
    author: 'sarah_edo',
    timestamp: 1467166872634,
    a: {
      text: 'Michael Jordan',
      votes: ['sarah_edo'],
    },
    b: {
      text: 'Jimmer Fredette',
      votes: [],
    },
    c: {
      text: 'Lebron James',
      votes: [],
    },
    d: {
      text: 'Kobe Bryant',
      votes: [],
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    question: "How will we build UIs in 2019?",
    author: 'dan_abramov',
    timestamp: 1468479767190,
    a: {
      text: 'React.js',
      votes: ['sarah_edo'],
    },
    b: {
      text: 'ReasonML',
      votes: [],
    },
    c: {
      text: 'Vue.js',
      votes: [],
    },
    d: {
      text: 'Angular.js',
      votes: ['dan_abramov'],
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    question: "What is your favorite book?",
    author: 'sarah_edo',
    timestamp: 1488579767190,
    a: {
      text: 'Harry Potter',
      votes: [],
    },
    b: {
      text: 'Lord of the Rings',
      votes: ['sarah_edo'],
    },
    c: {
      text: 'To Kill a Mockingbird',
      votes: [],
    },
    d: {
      text: 'Other',
      votes: [],
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    question: "Which artist do you prefer?",
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    a: {
      text: 'Chance the Rapper',
      votes: [],
    },
    b: {
      text: 'Anderson .Paak',
      votes: [],
    },
    c: {
      text: 'Childish Gambino',
      votes: [],
    },
    d: {
      text: 'Kanye West',
      votes: ['sarah_edo'],
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    question: "Where is the best place to live?",
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    a: {
      text: 'Eden, Utah',
      votes: ['tylermcginnis'],
    },
    b: {
      text: 'Kauai, HI',
      votes: [],
    },
    c: {
      text: 'San Francisco, CA',
      votes: [],
    },
    d: {
      text: 'Other',
      votes: ['dan_abramov'],
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    question: "Who will win the election in 2020?",
    author: 'dan_abramov',
    timestamp: 1493579767190,
    a: {
      text: 'Kanye West',
      votes: ['dan_abramov'],
    },
    b: {
      text: 'Donald Trump',
      votes: [],
    },
    c: {
      text: 'Oprah Winfrey',
      votes: ['tylermcginnis'],
    },
    d: {
      text: 'Dwayne Johnson',
      votes: [],
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getPolls () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...polls}), 1000)
  })
}

function formatPoll (poll) {
  return {
    ...poll,
    id: generateUID(),
    timestamp: Date.now(),
    a: {
      text: poll.a,
      votes: [],
    },
    b: {
      text: poll.b,
      votes: [],
    },
    c: {
      text: poll.c,
      votes: [],
    },
    d: {
      text: poll.d,
      votes: [],
    },
  }
}

export function _savePoll (poll) {
  return new Promise((res, rej) => {
    const formattedPoll = formatPoll(poll)

    setTimeout(() => {
      polls = {
        ...polls,
        [formattedPoll.id]: formattedPoll,
      }

      res(formattedPoll)
    }, 1000)
  })
}

export function _savePollAnswer ({ authedUser, id, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = users[authedUser]
      const poll = polls[id]

      users = {
        ...users,
        [authedUser]: {
          ...user,
          answers: {
            ...user.answers,
            [id]: answer
          }
        }
      }

      polls = {
        ...polls,
        [id]: {
          ...poll,
          [answer]: {
            ...poll[answer],
            votes: poll[answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}