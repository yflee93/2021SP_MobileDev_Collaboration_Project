import { db } from '../../db'

export const createUser = async (username, password) => {
  await db.ref('/users').child(username).set({
    password: password,
  })
}

export const allUsers = async () => {
  return db.ref('/users')
}

export const checkIfUserExists = async (username) => {
  let a = true
  await db
    .ref('/users')
    .child(username)
    .once('value', (snapshot) => {
      a = snapshot.val() ? Object.values(snapshot.val())[0] : false
    })

  return a
}

export const reserve = async (username, court, date, time) => {
  const newRevervation = {
    courtKey: court.key,
    courtName: court.name,
    date: date,
    time: time,
  }
  await db.ref(`/users/${username}/reservations`).push(newRevervation)
  await db.ref(`/courts/${court.key}/reservations/${date}/${time}`).set(true)
}

export const cancelReserve = async (
  username,
  reservationID,
  courtKey,
  date,
  time
) => {
  await db.ref(`/users/${username}/reservations`).child(reservationID).remove()
  await db.ref(`/courts/${courtKey}/reservations/${date}/${time}`).remove()
}

export const loadAllReservations = (username) => {
  return db.ref(`/users/${username}/reservations`)
}

export const addCourt = async (el) => {
  await db.ref('/courts').push({
    name: el.name,
    address: el.address,
    location: el.location,
    ratings: el.ratings,
    popularity: el.popularity,
    maintainence: el.maintainence,
    rank: calculateRank(el),
  })
}

export const loadAllCourts = () => {
  return db.ref('/courts')
}

export const loadAllReservationsInDate = (courtKey, date) => {
  return db.ref(`/courts/${courtKey}/reservations/${date}`)
}

const calculateRank = (el) => {
  let a = 0.5 * el.ratings
  let b = 0.2 * el.maintainence
  let c = 0
  if (el.popularity < 10) {
    c = 1
  } else if (el.popularity < 30) {
    c = 2
  } else if (el.popularity < 50) {
    c = 3
  } else if (el.popularity < 75) {
    c = 4
  } else {
    c = 5
  }
  c *= 0.3
  return a + b + c
}
